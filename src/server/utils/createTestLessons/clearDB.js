const createTestLessons = require(".");
const mongoDB = require("../../db");
const Lesson = require("../../models/lessons/lessons");

const clearLessons = async () => {
  try {
    await mongoDB(); // Establish a MongoDB connection

    const result = await Lesson.deleteMany({});
    console.log(
      `Удалено ${result.deletedCount} документов из коллекции 'Lessons'`
    );

    await createTestLessons();
  } catch (err) {
    console.error("Ошибка при удалении документов:", err);
  }
};

clearLessons();
