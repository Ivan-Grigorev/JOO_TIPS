const calculateMetricsAndSendEmail = require("./analysis/index.js");
const app = require("./app.js");
const mongoDB = require("./db.js");
const Lesson = require("./models/lessons/lessons.js");
// const httpsServer = require("./security/ssl");
const { autoCheckSubscriptionTime } = require("./utils/utils.js");
require("./cronJobs.js");
require("colors");

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow);

  await mongoDB();

  // await calculateMetricsAndSendEmail();
  // await createTestLessons();

  // todo Добавить интервал для когортного отчёта
  setInterval(autoCheckSubscriptionTime, 3600000); // 3600000 миллисекунд - 1 час
});

// const createTestLessons = async () => {
//   try {
//     const userId = "64b5285e6384f51d63b4dbcd";
//     const sampleLessonsForUser1 = [
//       {
//         userId,
//         title: "Урок 1: Введение в JavaScript",
//         points: 10,
//       },
//       {
//         userId,
//         title: "Урок 2: Основы React",
//         points: 20,
//       },
//       // ... добавьте другие уроки по аналогии
//     ];

//     const sampleLessonsForUser2 = [
//       {
//         userId,
//         title: "Урок 1: Введение в JavaScript",
//         points: 15,
//       },
//       {
//         userId,
//         title: "Урок 2: Основы React",
//         points: 25,
//       },
//       // ... добавьте другие уроки по аналогии
//     ];

//     // Сохраняем уроки для каждого пользователя
//     await Lesson.insertMany(sampleLessonsForUser1);
//     await Lesson.insertMany(sampleLessonsForUser2);
//   } catch (error) {
//     console.error(`error: ${error}`);
//   }
// };
