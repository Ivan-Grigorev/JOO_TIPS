const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoDB = require("../db.js");

const User = require("./utils/user.js");
const Language = require("./utils/languages.js");
const Lesson = require("./utils/lessons.js");
const isInWorkingRange = require("./utils/dateUtils.js").isInWorkingRange;

// moment config
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
});

jest.setTimeout(100000);

describe("Test algorithm with 2 test users and logging topics", () => {
  const language = "javascript";
  let userToken;
  let userId;

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
    const response = await User.create(app, userData);

    expect(response.status).toBe(201);

    userToken = response.body.token;
    userId = response.body.userId;
  });

  it("Should add language and active language", async () => {
    const requests = await Promise.all([
      Language.add(app, language, userToken),
      Language.addActive(app, language, userToken),
    ]);

    expect(requests[0].status).toBe(201);
    expect(requests[1].status).toBe(201);

    const user = await User.findByEmail(userData.email);

    expect(user).toBeDefined();

    const userHaveLanguageObject = user.languages.length === 1;
    const userHaveActiveLanguage = user.activeLanguage === "javascript";

    expect(userHaveLanguageObject).toBe(true);
    expect(userHaveActiveLanguage).toBe(true);
  });

  it("Should create and finish lessons in 6 months with logging all used topics", async () => {
    let currentDate = moment();
    const endDate = currentDate.clone().add(6, "months"); // Добавляем полгода к начальной дате

    while (currentDate.isSameOrBefore(endDate)) {
      if (isInWorkingRange(currentDate)) {
        console.log("Текущая дата:".yellow, currentDate.format('DD.MM.YYYY HH:mm')); // prettier-ignore
        console.log("Конечная дата:".yellow, endDate.format('DD.MM.YYYY HH:mm')); // prettier-ignore

        await Lesson.create(app, language, currentDate, userToken);

        const activeLessons = await Lesson.getActive(userId);

        if (activeLessons.length === 0) {
          currentDate.add(1, "day");
          continue;
        }

        await Lesson.finishAll(app, language, currentDate, userToken);

        // Увеличиваем текущую дату на один день
        currentDate.add(1, "day");
      }
    }
  });

  afterAll(async () => {
    // Удаляем созданного тестового пользователя
    await Promise.all([
      User.deleteByEmail(userData.email),
      //  Lesson.deleteCreated(userId);
    ]);
  });
});
