const Lesson = require("../../../models/lessons/lessons");
const User = require("../../../models/user/user");
const getCardsCountByTopics = require("./utils/getCardsCountByTopic");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {string} userId - User ID user to search Lessons linked with user.
 *
 * @returns {number}
 */
async function getViewedPercent(userId) {
  try {
    const user = await User.findById(userId);
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === user.activeLanguage;
    });

    const topicsToFind = activeLanguage.activeTopics;

    // console.log({ activeLanguage });

    const [totalCardCount, userLessons] = await Promise.all([
      getCardsCountByTopics(topicsToFind),
      Lesson.find({ userId, "cards.topic": { $in: topicsToFind } }),
    ]);

    console.log(`totalCardCount - ${totalCardCount}`);
    console.log(`Lesson -> ${Lesson}`);

    // Создайте Set для хранения уникальных идентификаторов карточек
    const uniqueCardIds = new Set();

    // Извлеките уникальные идентификаторы карточек из уроков пользователя
    userLessons.forEach((lesson) => {
      lesson.cards.forEach((cardId) => uniqueCardIds.add(cardId));
    });

    // Получите количество уникальных карточек, привязанных к пользователю
    const userCardCount = uniqueCardIds.size;

    // Рассчитайте процент привязанных карточек
    const percentage = (userCardCount / totalCardCount) * 100;

    return percentage;
  } catch (e) {
    console.error("Error getting viewed cards percent");
    throw new Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
