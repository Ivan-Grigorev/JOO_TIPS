const Card = require("../../../models/Card/Card");
const Lesson = require("../../../models/lessons/lessons");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {string } userId - User ID user to search Lessons linked with user.
 * @param {string} topic - Card topic to search and count Card documents and to find Lessons by its topics.
 *
 * @returns {number}
 */
async function getViewedPercent(userId, topic) {
  try {
    const [totalCardCount, userLessons] = await Promise.all([
      Card.find({ topic }).countDocuments(),
      Lesson.find({ userId, topic }),
    ]);

    // Создайте Set для хранения уникальных идентификаторов карточек
    const uniqueCardIds = new Set();

    // Извлеките уникальные идентификаторы карточек из уроков пользователя
    userLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => {
        uniqueCardIds.add(cardId);
      });
    });

    // Получите количество уникальных карточек, привязанных к пользователю
    const userCardCount = uniqueCardIds.size;

    // Рассчитайте процент привязанных карточек
    const percentage = (userCardCount / totalCardCount) * 100;

    return percentage;
  } catch (e) {
    console.error("Error getting viewed cards percent");
    throw new Error("Error getting viewed cards percent");
  }
}

module.exports = getViewedPercent;
