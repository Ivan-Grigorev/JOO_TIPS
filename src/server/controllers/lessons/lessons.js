const Lesson = require("../../models/lessons/lessons");
const User = require("../../models/user/user");
require("colors");

// This function calculates the sum of points for lessons associated with the user.
async function getLessonsPointsSum(req, res) {
  try {
    // Check if there is an authenticated user, return error if not.
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required." });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);

    // Get the active language from the user's data
    const activeLanguage = user.activeLanguage;

    // Access the points for the active language from languagesPoints object
    const points = user.languagesPoints.get(activeLanguage);

    // Respond with the total points, defaulting to 0 if not found.
    res.json(points);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response.
    console.error("Error fetching user points:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// This function retrieves lessons associated with the user.
async function getLessons(req, res) {
  const userId = req.user.id;

  try {
    // Find lessons linked to the specified userId.
    const lessons = await Lesson.find({ userId });

    // Respond with the retrieved lessons.
    res.json(lessons);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response.
    res.status(500).json({ error: "Server error" });
  }
}

async function addPoints(req, res) {
  const { language, points } = req.lesson;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, {
      $inc: { [`languagesPoints.${language}`]: points },
    });

    res.status(204).json(user.languagesPoints.React);
  } catch (e) {
    console.error(`Error adding points: ${e}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function finishLesson(req, res, next) {
  const { lessonId } = req.body;
  // console.log(req.body); // Logging the request body for debugging

  try {
    // Find the lesson by its ID in the database
    const lesson = await Lesson.findById(lessonId);

    // Set the completion flag of the lesson to true
    lesson.completed = true;
    await lesson.save();

    req.lesson.points = lesson.points;
    req.lesson.language = lesson.language;

    next();
    // Respond with a success message if the lesson was completed successfully
    // res.status(200).json({ message: "Lesson finished successfully." });
  } catch (error) {
    // Handle errors if any occurred during the process
    console.error("Error finishing lesson:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { getLessonsPointsSum, getLessons, finishLesson, addPoints };
