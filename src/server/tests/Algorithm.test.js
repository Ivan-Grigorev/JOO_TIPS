const request = require("supertest");
const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoDB = require("../db.js");
const User = require("../models/user/user.js");
// moment config
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
});

jest.setTimeout(999999999);

describe("Test algorithm with 2 test users and logging topics", () => {
  const language = "javascript";
  let userToken;

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
    const requests = await Promise.all([
      request(app)
        .post("/languages/add")
        .send({ language })
        .set("Authorization", `Bearer ${userToken}`)
        .catch((e) => console.error(e)),

      request(app)
        .post("/languages/add/active")
        .send({ language })
        .set("Authorization", `Bearer ${userToken}`)
        .catch((e) => console.error(e)),
    ]);

    expect(requests[0].status).toBe(201);
    expect(requests[1].status).toBe(201);

    const user = await User.findOne({ email: userData.email });

    expect(user).toBeDefined();

    const userHaveLanguageObject = user.languages.length === 1;
    const userHaveActiveLanguage = user.activeLanguage === "javascript";

    expect(userHaveLanguageObject).toBe(true);
    expect(userHaveActiveLanguage).toBe(true);
  });

  it("Should create and finish lessons in half year with logging all used topics", async () => {
    try {
      let currentDate = moment();
      let loopIteration = 0;
      const endDate = currentDate.clone().add(6, "months"); // Добавляем полгода к начальной дате

      //! Разбить на три группы тестов
      //! Которые будут создавать уроки каждый на 2 месяца

      //! Разбить на три группы тестов
      //! Которые будут создавать уроки каждый на 2 месяца

      //! Разбить на три группы тестов
      //! Которые будут создавать уроки каждый на 2 месяца

      //! Разбить на три группы тестов
      //! Которые будут создавать уроки каждый на 2 месяца

      //! Разбить на три группы тестов
      //! Которые будут создавать уроки каждый на 2 месяца
      
      while (currentDate.isSameOrBefore(endDate)) {
        if (loopIteration % 10 === 0) {
          console.info("Пауза на 30 секунд".blue);
          await new Promise((resolve) => setTimeout(resolve, 60000)); // Задержка на секунду
          console.info("Продолжение".blue);
        }
        console.log("Текущая дата:".yellow, currentDate.format('DD.MM.YYYY HH:mm')); // prettier-ignore

        const createdLessons = await request(app)
          .get("/lessons/testAlgorithm")
          .send({ language, testDate: currentDate })
          .set("Authorization", `Bearer ${userToken}`);

        // expect(createdLessons.status).toBe(200);
        expect(createdLessons.body).toBeDefined();

        const lessons = createdLessons.body;

        const activeLessons = lessons
          .filter((lesson) => lesson.status === null) // Фильтруем уроки по условию
          .map((lesson) => lesson._id.toString()); // Преобразуем в массив строковых ID уроков

        if (activeLessons.length === 0) {
          currentDate.add(1, "day");
          loopIteration++;
          continue;
        }

        await request(app)
          .post("/lessons/finishAll")
          .send({ language, testDate: currentDate })
          .set("Authorization", `Bearer ${userToken}`)
          .then(() => console.log("Lessons was finished"))
          .catch((e) => console.error(e));

        // Увеличиваем текущую дату на один день
        currentDate.add(1, "day");
        loopIteration++;
      }
    } catch (e) {
      console.error(e);
    }
  });

  afterAll(async () => {
    // Удаляем созданного тестового пользователя
    await User.findOneAndDelete({ email: userData.email })
      .then(console.log("Test user was deleted".green))
      .catch((e) => console.error(`Test user wasn't deleted, ${e}`.red));
  });
});
