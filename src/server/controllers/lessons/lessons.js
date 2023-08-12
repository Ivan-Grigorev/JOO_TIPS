const Lesson = require("../../models/lessons/lessons");
require("colors");
const mongoose = require("mongoose"); // Убедитесь, что вы импортировали mongoose

// This function calculates the sum of points for lessons associated with the user.
async function getLessonsPointsSum(req, res) {
  try {
    // Check if there is an authenticated user, return error if not.
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required." });
    }

    // Convert the user ID to a MongoDB ObjectId.
    const userId = new mongoose.Types.ObjectId(req.user.id);

    // Calculate the total points for lessons associated with this user.
    const totalPoints = await Lesson.aggregate([
      { $match: { userId: userId } },
      { $group: { _id: null, total: { $sum: "$points" } } },
    ]);

    // Respond with the total points, defaulting to 0 if not found.
    res.json({ totalPoints: totalPoints[0] ? totalPoints[0].total : 0 });
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

module.exports = { getLessonsPointsSum, getLessons };
