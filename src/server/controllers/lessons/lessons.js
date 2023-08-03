const Lesson = require("../../models/lessons/lessons");
require("colors");

async function getLessonsPointsSum(req, res) {
  try {
    // Если нет аутентифицированного пользователя, возвращаем ошибку
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required." });
    }

    // Вычисляем общее количество баллов для этого пользователя
    const totalPoints = await Lesson.aggregate([
      { $match: { userId: req.user._id } },
      { $group: { _id: null, total: { $sum: "$points" } } },
    ]);


    res.json({ totalPoints: totalPoints[0] ? totalPoints[0].total : 0 });
  } catch (error) {
    console.error("Error fetching user points:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getLessonsPointsSum };
