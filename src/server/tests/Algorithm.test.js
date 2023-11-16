const request = require("supertest");
const app = require("../app.js"); // Подключите ваше Express-приложение
const moment = require("moment");
const mongoose = require("mongoose");
require("moment-timezone");

const mongoDB = require("../db.js");

const getCurrentDate = require("../utils/lessons/getCurrentDate.js");

beforeAll(async () => {
  app.listen(80, async () => {
    await mongoDB();
  });
  // await mongoDB();
});

describe("Test algorithm with 2 test users and logging topics", () => {
  it("POST /users/login should return 200 status code", async () => {
    const response = await request(app).post("/users/login").send({
      name: "vladis",
      email: "vladis@gmail.com",
      password: "qwerty",
      confirmedPassword: "qwerty",
    });

    console.log("response.body".red, response.body);
    expect(response.status).toBe(200);
  });

  //   it("Should create 2 test users", async () => {
  //     var a = {
  //       name: "Test User 1",
  //       email: "testUser1@example.com",
  //       password: "qwerty",
  //     };
  //   });
});
