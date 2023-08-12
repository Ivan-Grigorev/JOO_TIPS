const calculateMetricsAndSendEmail = require("./analysis/index.js"); // Import the module responsible for calculating metrics and sending emails
const app = require("./app.js"); // Import the main application module
const mongoDB = require("./db.js"); // Import the module for establishing a MongoDB connection
const Lesson = require("./models/lessons/lessons.js"); // Import the Lesson model
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
        topic: "Fundamentals of Express",
        subtopic: "Introduction to Express",
        flashcardsCount: 3,
        lessonDate: new Date(2023, 7, 9, 10, 0),
        endTime: new Date(2023, 7, 9, 10, 45),
        lessonNumber: 3,
        lessonDuration: 45,
      },
      // ... (other sample lessons)
    ];

    // Save the sample lessons for the user
    await Lesson.insertMany(sampleLessons);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
