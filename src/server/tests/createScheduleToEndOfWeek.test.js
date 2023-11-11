require("moment-timezone");
const { mongoose } = require("mongoose");

const mongoDB = require("../db.js");
const { createScheduleToEndOfWeek } = require("../middlewares/lessons.js");
const createLessons = require("../utils/lessons/createLessons.js");
const getTechProps = require("../utils/lessons/getTechProps/getTechProps.js");
const getCurrentDate = require("../utils/lessons/getCurrentDate.js");

beforeAll(async () => await mongoDB());

describe("createScheduleToEndOfWeek middleware", () => {
  const userId = "654d5389af1719bc76520019";
  const language = "javascript";

  // Получаем текущую дату и количество дней до воскресенья с помощью утилиты getCurrentDate
  const {
    currentDate,
    lastDayOfMonth,
    firstSundayOfMonth,
    daysUntilSunday,
    expiredDate,
  } = getCurrentDate();

  it("Should create the lessons for the current week", async () => {
    // Создаем объект req, который бы обычно передавался в middleware
    const req = {
      body: { language },
      user: { id: userId },
      scheduleIsExists: false,
    };
    const res = {};
    const next = jest.fn(); // Создаем mock функцию для next()

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
      daysUntilSunday,
      currentDate,
      userId,
      language,
      techProps.dayLesson.cardsAmount,
      techProps.dayLesson.cardsAmount * daysUntilSunday,
      techProps.dayLesson.duration
    );

    const allLessonsHasFiveCardsInside = lessonsToCreate.every((lesson) => {
      return lesson.cards.length === 5;
    });

    const allFieldsCorrect = lessonsToCreate.every((lesson) => {
      return (
        lesson.userId === userId &&
        lesson.language === language &&
        lesson.startTime === null &&
        lesson.endTime === null &&
        lesson.status === null &&
        lesson.lessonDate ===
          currentDate
            .set({ hour: 3, minute: 0, second: 0 })
            .format("DD.MM.YYYY HH:mm") &&
        lesson.lessonDuration === techProps.dayLesson.duration &&
        lesson.expired === expiredDate
      );
    });

    expect(lessonsToCreate).toHaveLength(daysUntilSunday); // Проверяем, что создано правильное количество уроков
    expect(allLessonsHasFiveCardsInside).toBe(true);
    expect(allFieldsCorrect).toBe(true);
  });

  it("Should create week lesson", async () => {
    // Получаем технические свойства с использованием утилиты getTechProps
    const techProps = await getTechProps(language);

    // Создаем урок на воскресенье
    const lessonsToCreate = await createLessons.weekly(
      userId,
      language,
      techProps.weekLesson.cardsAmount,
      firstSundayOfMonth, // test current date
      expiredDate,
      techProps.weekLesson.lessonDuration
    );

    // Проверяем, что создано правильное количество уроков
    expect(lessonsToCreate).toBeDefined();
  });
});

// Отключаемся от MongoDB после завершения всех тестов
afterAll(async () => await mongoose.disconnect());
