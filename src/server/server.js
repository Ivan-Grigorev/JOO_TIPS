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

const createTestLessons = async () => {
  try {
    const userId = "64b5285e6384f51d63b4dbcd";

    const sampleLessons = [
      {
        userId,
        topic: "Fundamentals of Express",
        subtopic: "Introduction to Express",
        flashcardsCount: 3,
        lessonDate: new Date(2023, 7, 9, 10, 0),
        endTime: new Date(2023, 7, 9, 10, 45),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Fundamentals of Express",
        subtopic: "Routing in Express",
        flashcardsCount: 6,
        lessonDate: new Date(2023, 7, 10, 14, 0),
        endTime: new Date(2023, 7, 10, 16, 0),
        lessonNumber: 4,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "React Hooks",
        subtopic: "useState and useEffect",
        flashcardsCount: 4,
        lessonDate: new Date(2023, 7, 11, 9, 0),
        endTime: new Date(2023, 7, 11, 10, 30),
        lessonNumber: 1,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "React Hooks",
        subtopic: "useContext and useReducer",
        flashcardsCount: 5,
        lessonDate: new Date(2023, 7, 12, 13, 0),
        endTime: new Date(2023, 7, 12, 15, 0),
        lessonNumber: 2,
        lessonDuration: 45,
      },
    ];

    // Save the lessons for the user
    await Lesson.insertMany(sampleLessons);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
