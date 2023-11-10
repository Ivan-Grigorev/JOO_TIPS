require("moment-timezone");
const { mongoose } = require("mongoose");

const mongoDB = require("../db.js");
const { createScheduleToEndOfWeek } = require("../middlewares/lessons");

beforeAll(async () => await mongoDB());

describe("createScheduleToEndOfWeek middleware (algorithm)", () => {
  it("Should create the lessons for current week", async () => {
    // const res = (await request(createScheduleToEndOfWeek).post("/")).send({
    //   body: { language: "javascript" },
    //   user: { id: "654d5389af1719bc76520019" },
    //   scheduleIsExists: false,
    // });

    const req = {
      body: { language: "javascript" },
      user: { id: "654d5389af1719bc76520019" },
      scheduleIsExists: false,
    };
    const res = {};
    const next = jest.fn(); // Создаем mock функцию для next()

    console.log("Перед вызовом функции");
    await createScheduleToEndOfWeek(req, res, next);
    console.log("После вызова функции");

    // Проверяем, что next() была вызвана
    expect(next).toHaveBeenCalled();
  });
});

afterAll(async () => await mongoose.disconnect());
