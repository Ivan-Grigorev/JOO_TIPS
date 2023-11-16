const request = require("supertest");
const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoose = require("mongoose");
require("moment-timezone");
const {
  deleteCurrentUser,
  getCurrentUser,
} = require("../controllers/auth/auth.js");

const mongoDB = require("../db.js");

const getCurrentDate = require("../utils/lessons/getCurrentDate.js");
const User = require("../models/user/user.js");

beforeAll(async () => {
  app.listen(80, async () => {
    await mongoDB();
  });
});

const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
const userData = {
  name: "testUser-topics",
  email: "testUser-topics@gmail.com",
  password: "qwerty",
  confirmedPassword: "qwerty",
};

describe("Test algorithm with 2 test users and logging topics", () => {
  var userToken;

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
    const userHaveLanguageObject = user.languages.length === 1;
    const userHaveActiveLanguage = user.activeLanguage === "javascript";

    expect(userHaveLanguageObject).toBe(true);
    expect(userHaveActiveLanguage).toBe(true);
  });
});

afterAll(async () => {
  // Удаляем созданного тестового пользователя
  await User.findOneAndDelete({ email: userData.email })
    .then(console.log("Test user was deleted"))
    .catch((e) => console.error(e));
});
