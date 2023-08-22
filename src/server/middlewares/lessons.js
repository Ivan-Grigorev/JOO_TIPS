const Lesson = require("../models/lessons/lessons");

// Middleware function to check if a lesson exists by its ID
const isLessonExistById = async (req, res, next) => {
  try {
    const { lessonId } = req.body;

    // Find the lesson in the database by its ID and user ID
    const lesson = await Lesson.findOne({ _id: lessonId, userId: req.user.id });

    if (!lesson) {
      // Lesson not found, send a 404 response
      // console.log("Lesson is not found");
      return res.status(404).json({ message: "Lesson is not found" });
    }

    // If lesson exists, continue to the next middleware or route handler
    next();
  } catch (e) {
    // Handle errors if any
    console.error(`Error: ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  isLessonExistById,
};
