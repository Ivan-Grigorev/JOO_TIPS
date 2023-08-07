const Lesson = require("../../models/lessons/lessons");
require("colors");
const mongoose = require("mongoose"); // Убедитесь, что вы импортировали mongoose

async function getLessonsPointsSum(req, res) {
  try {
    // Если нет аутентифицированного пользователя, возвращаем ошибку
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required." });
    }

    const userId = new mongoose.Types.ObjectId(req.user.id); // Преобразование в ObjectId

    // Вычисляем общее количество баллов для этого пользователя
    const totalPoints = await Lesson.aggregate([
      { $match: { userId: userId } }, // Использование преобразованного идентификатора
      { $group: { _id: null, total: { $sum: "$points" } } },
    ]);

    res.json({ totalPoints: totalPoints[0] ? totalPoints[0].total : 0 });
  } catch (error) {
    console.error("Error fetching user points:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getLessons(req, res) {
  const userId = req.user.id;

  try {
    // Находим уроки, привязанные к заданному userId
    const lessons = await Lesson.find({ userId });

    // Отправляем уроки в ответе
    res.json(lessons);
  } catch (error) {
    // В случае ошибки отправляем ошибку в ответе
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { getLessonsPointsSum, getLessons };
