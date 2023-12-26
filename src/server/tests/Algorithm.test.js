const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoDB = require("../db.js");

const User = require("./utils/user.js");
const Language = require("./utils/languages.js");
const Lesson = require("./utils/lessons.js");
const utils = require("./utils/utils.js");
const isInWorkingRange = require("./utils/dateUtils.js").isInWorkingRange;

// moment config
moment.tz.setDefault("Europe/Kiev");
moment.updateLocale("en", {
  week: {
    dow: 1, // Начало недели - понедельник (1)
  },
  // weekEnd: 6, // Конец недели - суббота (6)
});

jest.setTimeout(999999);

describe("Test algorithm with 2 test users and logging topics", () => {
  const language = "javascript";
  let userToken;
  let userId;
  let oldLanguageObject = null;

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
    expect(response.body.token).toBeDefined();

    userToken = response.body.token;
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
    expect(user._id).toBeDefined();

    userId = user._id.toString();
    oldLanguageObject = user.languages[0];

    const userHaveActiveLanguage = user.activeLanguage === "javascript";

    expect(userHaveActiveLanguage).toBe(true);
  });

  it("Should create and finish lessons in 5 months with logging all used topics", async () => {
    let currentDate = moment();
    let startLoggingDate = currentDate.clone(); // Начальная дата для логирования
    const endDate = currentDate.clone().add(5, "months"); // Добавляем полгода к начальной дате

    while (currentDate.isSameOrBefore(endDate)) {
      if (!isInWorkingRange(currentDate)) {
        currentDate.add(1, "day");
        continue;
      }

      console.log("Текущая дата:".yellow, currentDate.format('DD.MM.YYYY HH:mm')); // prettier-ignore
      console.log("Конечная дата:".yellow, endDate.format('DD.MM.YYYY HH:mm')); // prettier-ignore

      const createLessons = await Lesson.create(
        app,
        language,
        currentDate,
        userToken
      );

      expect(createLessons.status).toBe(201);
      expect(createLessons.body).toBeDefined();

      const finishLessons = await Lesson.finishAll(app, userToken);

      expect(finishLessons.status).toBe(201);

      // Увеличиваем текущую дату на один день
      currentDate.add(1, "day");

      // Раз в неделю проверяем на наличие изменений в объекте пользователя
      if (currentDate.diff(startLoggingDate, "weeks") >= 1) {
        const userLanguageObject = await User.getLanguageObject(userId);

        const changes = utils.compareFields(oldLanguageObject, userLanguageObject); // prettier-ignore

        if (changes) {
          await utils
            .formatChanges(changes, language)
            .then((formattedChanges) => {
              formattedChanges.length !== 0
              ? utils.log(formattedChanges, currentDate.format("DD.MM.YYYY"))
              : utils.log(["Nothing changed"], currentDate.format("DD.MM.YYYY")) // prettier-ignore
            });
        }

        startLoggingDate = currentDate.clone(); // Обновляем начальную дату для следующего логирования
        oldLanguageObject = userLanguageObject;
      }
    }
  });

  afterAll(async () => {
    await Lesson.count(userId);

    await utils.clearDatabase(userId, userData.email);
  });
});
