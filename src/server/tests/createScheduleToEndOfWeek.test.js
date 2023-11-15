const moment = require("moment");
const mongoose = require("mongoose");
require("moment-timezone");

const User = require("../models/user/user.js");

const mongoDB = require("../db.js");
const { createScheduleToEndOfWeek } = require("../middlewares/lessons.js");
const createLessons = require("../utils/lessons/createLessons.js");
const languages = require("../controllers/languages/languages.js");

const getTechProps = require("../utils/lessons/getTechProps/getTechProps.js");
const getCurrentDate = require("../utils/lessons/getCurrentDate.js");
const Lesson = require("../models/lessons/lessons.js");

beforeAll(async () => await mongoDB());
var testUserID;

describe("createScheduleToEndOfWeek middleware", () => {
  var userId;
  var language;

  // Получаем текущую дату и количество дней до воскресенья с помощью утилиты getCurrentDate
  const date = getCurrentDate();

  const next = jest.fn(); // Создаем mock функцию для next()

  it("Should create new user for test", async () => {
    const newUser = await User.create({
      name: "testUser",
      email: "email@gmail.com",
      password: "hashedPassword",
      country: "not identified",
      activeLanguage: null, // "javascript",
      profile: {
        about: null,
        username: null,
        interfaceLanguage: "English",
        notifications: true,
      },
      subscription: {
        type: "Common",
        isPremium: false,
        expired: {
          startDate: null,
          endDate: null,
        },
      },
      deviceInfo: {
        os: "req.user.deviceInfo.os",
        device: "req.user.deviceInfo.device",
        browser: "req.user.deviceInfo.browser",
      },
      IP: {
        firstUserIP: "userIP",
        lastUserIP: "userIP",
      },
      registrationDate: moment().format("DD.MM.YYYY"),
    });

    expect(newUser).toBeDefined();

    userId = newUser._id.toString();
    testUserID = newUser._id.toString();
  });

  it("Should add language and set him as active language", async () => {
    const req = { body: { language: "javascript" }, user: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await Promise.all([languages.add(req, res), languages.setActive(req, res)]);

    const user = await User.findById(userId);

    const languageObjWasCreated = user.languages.length === 1;
    const activeLanguageIsExisting = user.activeLanguage === req.body.language;

    expect(languageObjWasCreated).toBe(true);
    expect(activeLanguageIsExisting).toBe(true);

    language = user.activeLanguage;
  });

  it("Should create the lessons for the current week", async () => {
    // Создаем объект req, который бы обычно передавался в middleware
    const req = {
      body: { language },
      user: { id: userId },
      scheduleIsExists: false,
    };
    const res = {};

    // Вызываем middleware для создания расписания
    await createScheduleToEndOfWeek(req, res, next);

    // Проверяем, что функция next() была вызвана
    expect(next).toHaveBeenCalled();
  });

  it("Should create daily lessons amount depending on the date", async () => {
    // Получаем технические свойства с использованием утилиты getTechProps
    const techProps = await getTechProps(language);

    // Создаем уроки для каждого дня до воскресенья
    const lessonsToCreate = await createLessons.daily(
      date.daysUntilSunday,
      date.currentDate,
      userId,
      language,
      techProps.dayLesson.cardsAmount,
      techProps.dayLesson.cardsAmount * date.daysUntilSunday,
      techProps.dayLesson.duration
    );

    const allLessonsHasFiveCardsInside = lessonsToCreate.every((lesson) => {
      return lesson.cards.length === 5;
    });

    const allFieldsCorrect = lessonsToCreate.every((lesson, i) => {
      const lessonDate = date.currentDate
        .clone()
        .add(i, "days")
        .set({ hour: 3, minute: 0, second: 0 })
        .format("DD.MM.YYYY HH:mm");

      const expiredDate = date.currentDate
        .clone()
        .add(i + 1, "days")
        .set({ hour: 3, minute: 0, second: 0 })
        .format("DD.MM.YYYY HH:mm");

      lesson.userId !== userId && console.error("User id is not match".red);
      lesson.language !== language && console.error("Lesson language is not match".red); // prettier-ignore
      lesson.lessonDate !== lessonDate && console.error("Lesson date is not match".red); // prettier-ignore
      lesson.lessonDuration !== techProps.dayLesson.duration && console.error("lesson Duration  is not match".red); // prettier-ignore
      lesson.expired !== expiredDate && console.error("expired time is not match".red); // prettier-ignore

      return (
        lesson.userId === userId &&
        lesson.language === language &&
        lesson.startTime === null &&
        lesson.endTime === null &&
        lesson.status === null &&
        lesson.lessonDate === lessonDate &&
        lesson.lessonDuration === techProps.dayLesson.duration &&
        lesson.expired === expiredDate
      );
    });

    expect(lessonsToCreate).toHaveLength(date.daysUntilSunday); // Проверяем, что создано правильное количество уроков
    expect(allLessonsHasFiveCardsInside).toBe(true);
    expect(allFieldsCorrect).toBe(true);
  });

  it("Should create week lesson", async () => {
    // Получаем технические свойства с использованием утилиты getTechProps
    const techProps = await getTechProps(language);

    // Создаем урок на воскресенье
    const lessonToCreate = await createLessons.weekly(
      userId,
      language,
      techProps.weekLesson.cardsAmount,
      date.firstSundayOfMonth, // test current date
      date.expiredDate,
      techProps.weekLesson.lessonDuration
    );

    // Проверяем, что создано правильное количество уроков
    expect(lessonToCreate).toBeDefined();
  });

  it("Should create month lesson", async () => {
    // Получаем технические свойства с использованием утилиты getTechProps
    const techProps = await getTechProps(language);

    // Создаем урок на воскресенье
    const lessonToCreate = await createLessons.monthly(
      userId,
      language,
      techProps.monthLesson.cardsAmount,
      date.lastDayOfMonth, // test current date
      date.expiredDate,
      techProps.monthLesson.lessonDuration
    );

    // Проверяем, что создано правильное количество уроков
    expect(lessonToCreate).toBeDefined();
  });
});

afterAll(async () => {
  // Удаляем созданного тестового пользователя и тестовые уроки.
  await Promise.all([
    User.findByIdAndDelete(testUserID)
      .then(() => console.log("Test user was deleted successfully".green))
      .catch((e) => console.error(`Error deleting test user: ${e}`.red)),
    Lesson.deleteMany({ userId: testUserID })
      .then(() => console.log("Test lessons was deleted successfully".green))
      .catch((e) => console.error(`Error deleting test lessons: ${e}`.red)),
  ]);

  // Отключаемся от MongoDB после завершения всех тестов
  await mongoose.disconnect();
});
