const request = require("supertest");
const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoDB = require("../db.js");
const User = require("../models/user/user.js");

describe("Test algorithm with 2 test users and logging topics", () => {
  var userToken;
  let startDate;

  const userData = {
    name: "testUser-topics",
    email: "testUser-topics@gmail.com",
    password: "qwerty",
    confirmedPassword: "qwerty",
  };

  beforeAll(async () => {
    app.listen(80, async () => {
      await mongoDB();
    });
  });

  it("Should create new test user", async () => {
    // Создаём тестового пользователя
    const response = await request(app)
      .post("/users/signup")
      .send(userData)
      .catch((e) => console.error(e));

    expect(response.status).toBe(201);

    userToken = response.body.token;
  });

  it("Should add language and active language", async () => {
    await Promise.all([
      request(app)
        .post("/languages/add")
        .send({ language: "javascript" })
        .set("Authorization", `Bearer ${userToken}`)
        .catch((e) => console.error(e)),

      request(app)
        .post("/languages/add/active")
        .send({ language: "javascript" })
        .set("Authorization", `Bearer ${userToken}`)
        .catch((e) => console.error(e)),
    ]);

    const user = await User.findOne({ email: userData.email });
    const userHaveLanguageObject = user.languages[0];
    const userHaveActiveLanguage = user.activeLanguage === "javascript";

    expect(userHaveLanguageObject).toBeDefined();
    expect(userHaveActiveLanguage).toBe(true);
  });

  it("Should create and finish lessons in half year with logging all used topics", async () => {
    try {
      const endDate = moment(startDate).add(6, "months"); // Добавляем полгода к начальной дате
      let currentDate = moment(startDate);

      while (currentDate.isSameOrBefore(endDate)) {
        const formattedDate = currentDate.format("DD.MM.YYYY");
        console.log("Текущая дата:", formattedDate);

        // Выполнение тестов или действий с использованием formattedDate
        console.info("Some action".blue);
        // Увеличиваем текущую дату на один день
        currentDate.add(1, "day");
      }

      console.log(`endDate, ${endDate}`.red);
    } catch (e) {
      console.error(e);
    }
  });

  afterAll(async () => {
    // Удаляем созданного тестового пользователя
    await User.findOneAndDelete({ email: userData.email })
      .then(console.log("Test user was deleted".green))
      .catch((e) => console.error("Test user wasn't deleted".red));
  });
});
