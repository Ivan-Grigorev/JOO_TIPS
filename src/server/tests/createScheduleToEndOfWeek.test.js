require("moment-timezone");
const { mongoose } = require("mongoose");

const mongoDB = require("../db.js");
const { createScheduleToEndOfWeek } = require("../middlewares/lessons.js");

beforeAll(async () => await mongoDB());

describe("createScheduleToEndOfWeek middleware (algorithm)", () => {
  it("Should create the lessons for current week", async () => {
    const req = {
      body: { language: "javascript" },
      user: { id: "654d5389af1719bc76520019" },
      scheduleIsExists: false,
    };
    const res = {};
    const next = jest.fn(); // Создаем mock функцию для next()

    await createScheduleToEndOfWeek(req, res, next);

    // Проверяем, что next() была вызвана
    expect(next).toHaveBeenCalled();
  });
});

afterAll(async () => await mongoose.disconnect());
