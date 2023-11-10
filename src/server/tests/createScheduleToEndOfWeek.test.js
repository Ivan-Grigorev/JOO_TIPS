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
  const { currentDate, daysUntilSunday } = getCurrentDate();

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

  it("Should create lessons amount depending on the date", async () => {
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

    // Проверяем, что создано правильное количество уроков
    expect(lessonsToCreate).toHaveLength(daysUntilSunday);
  });
});

// Отключаемся от MongoDB после завершения всех тестов
afterAll(async () => await mongoose.disconnect());
