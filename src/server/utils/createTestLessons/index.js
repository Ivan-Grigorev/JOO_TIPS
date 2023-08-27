const mongoDB = require("../../db");
const Lesson = require("../../models/lessons/lessons");

// Function to create test lessons (Commented out)
const createTestLessons = async () => {
  try {
    await mongoDB(); // Establish a MongoDB connection

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
        completed: false,
        language: "React",
        points: 1,
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
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux selectors",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 3, 0, 0),
        endTime: new Date(2023, 7, 4, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 4, 0, 0),
        endTime: new Date(2023, 7, 5, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 5, 0, 0),
        endTime: new Date(2023, 7, 6, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 6, 0, 0),
        endTime: new Date(2023, 7, 7, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 7, 0, 0),
        endTime: new Date(2023, 7, 8, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 8, 0, 0),
        endTime: new Date(2023, 7, 9, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 9, 0, 0),
        endTime: new Date(2023, 7, 10, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 10, 0, 0),
        endTime: new Date(2023, 7, 11, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 11, 0, 0),
        endTime: new Date(2023, 7, 12, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 12, 0, 0),
        endTime: new Date(2023, 7, 13, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 13, 0, 0),
        endTime: new Date(2023, 7, 14, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 14, 0, 0),
        endTime: new Date(2023, 7, 15, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 15, 0, 0),
        endTime: new Date(2023, 7, 16, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 16, 0, 0),
        endTime: new Date(2023, 7, 17, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 17, 0, 0),
        endTime: new Date(2023, 7, 18, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 18, 0, 0),
        endTime: new Date(2023, 7, 19, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 19, 0, 0),
        endTime: new Date(2023, 7, 20, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 20, 0, 0),
        endTime: new Date(2023, 7, 21, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 21, 0, 0),
        endTime: new Date(2023, 7, 22, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 22, 0, 0),
        endTime: new Date(2023, 7, 23, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 23, 0, 0),
        endTime: new Date(2023, 7, 24, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 24, 0, 0),
        endTime: new Date(2023, 7, 25, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 25, 0, 0),
        endTime: new Date(2023, 7, 26, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux selectors",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 26, 0, 0),
        endTime: new Date(2023, 7, 27, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "RTK",
        subtopic: "Redux actions",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 27, 0, 0),
        endTime: new Date(2023, 7, 28, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 28, 0, 0),
        endTime: new Date(2023, 7, 29, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 29, 0, 0),
        endTime: new Date(2023, 7, 30, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "Redux/RTK",
        subtopic: "Redux slices",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 30, 0, 0),
        endTime: new Date(2023, 7, 31, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
      {
        userId,
        topic: "The last REdux",
        subtopic: "The last redux",
        flashcardsCount: 45,
        lessonDate: new Date(2023, 7, 31, 0, 0),
        endTime: new Date(2023, 8, 1, 0, 0),
        lessonNumber: 3,
        lessonDuration: 45,
        completed: false,
        language: "React",
        points: 1,
      },
    ];

    const deleteLessons = await Lesson.deleteMany({});
    console.log(
      `Удалено ${deleteLessons.deletedCount} документов из коллекции 'Lessons'`
    );

    // Save the sample lessons for the user
    await Lesson.insertMany(sampleLessons);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log("Test lessons has been created");
  }
};

createTestLessons(); // Create test lessons (Commented out)

module.exports = createTestLessons;
