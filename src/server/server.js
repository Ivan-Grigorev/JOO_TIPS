const app = require("./app.js"); // Import the main application module
const mongoDB = require("./db.js"); // Import the module for establishing a MongoDB connection
const Lesson = require("./models/lessons/lessons.js"); // Import the Lesson model
const calculateMetricsAndSendEmail = require("./analysis/index.js"); // Import the module responsible for calculating metrics and sending emails
const { autoCheckSubscriptionTime } = require("./utils/utils.js"); // Import the autoCheckSubscriptionTime function

require("./cronJobs.js"); // Import cron jobs
require("colors"); // Import the "colors" library for colorful console logs

const PORT = process.env.PORT || 3000; // Set the port for the server
app.listen(PORT, async () => {
  console.log(`The server is listening on port ${PORT}`.yellow); // Log server start

  await mongoDB(); // Establish a MongoDB connection

  // await calculateMetricsAndSendEmail(); // Calculate metrics and send emails (Commented out)
  // await createTestLessons(); // Create test lessons (Commented out)

  // TODO: Add an interval for cohort reports
  setInterval(autoCheckSubscriptionTime, 3600000); // Run autoCheckSubscriptionTime every hour
});

// Function to create test lessons (Commented out)
const createTestLessons = async () => {
  try {
    const userId = "64b5285e6384f51d63b4dbcd"; // Sample user ID

    const sampleLessons = [
      // Sample lessons data
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Introduction to Redux",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 1, 0, 0),
        endTime: new Date(2023, 7, 2, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux",
        subtopic: "Redux actions",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 2, 10, 0),
        endTime: new Date(2023, 7, 3, 0, 0),

        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux selectors",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 3, 10, 0),
        endTime: new Date(2023, 7, 4, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 4, 10, 0),
        endTime: new Date(2023, 7, 5, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 5, 10, 0),
        endTime: new Date(2023, 7, 6, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 6, 10, 0),
        endTime: new Date(2023, 7, 7, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 7, 10, 0),
        endTime: new Date(2023, 7, 8, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 8, 10, 0),
        endTime: new Date(2023, 7, 9, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 9, 10, 0),
        endTime: new Date(2023, 7, 10, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 10, 10, 0),
        endTime: new Date(2023, 7, 11, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 11, 10, 0),
        endTime: new Date(2023, 7, 12, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 12, 10, 0),
        endTime: new Date(2023, 7, 13, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 13, 10, 0),
        endTime: new Date(2023, 7, 14, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 14, 10, 0),
        endTime: new Date(2023, 7, 15, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 15, 10, 0),
        endTime: new Date(2023, 7, 16, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 16, 10, 0),
        endTime: new Date(2023, 7, 17, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 17, 10, 0),
        endTime: new Date(2023, 7, 18, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 18, 10, 0),
        endTime: new Date(2023, 7, 19, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },

      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 19, 10, 0),
        endTime: new Date(2023, 7, 20, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 20, 10, 0),
        endTime: new Date(2023, 7, 21, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 21, 10, 0),
        endTime: new Date(2023, 7, 22, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 22, 10, 0),
        endTime: new Date(2023, 7, 23, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 23, 10, 0),
        endTime: new Date(2023, 7, 24, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 24, 10, 0),
        endTime: new Date(2023, 7, 25, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 25, 10, 0),
        endTime: new Date(2023, 7, 26, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 28, 10, 0),
        endTime: new Date(2023, 7, 29, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 29, 10, 0),
        endTime: new Date(2023, 7, 30, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 30, 10, 0),
        endTime: new Date(2023, 7, 31, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 31, 10, 0),
        endTime: new Date(2023, 8, 1, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
      },
    ];

    // Save the sample lessons for the user
    await Lesson.insertMany(sampleLessons);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
