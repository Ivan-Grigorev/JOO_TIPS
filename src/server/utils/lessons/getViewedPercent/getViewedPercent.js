const Card = require("../../../models/Card/Card");
const Lesson = require("../../../models/lessons/lessons");
const User = require("../../../models/user/user");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {string} userId - User ID user to search Lessons linked with user.
//  * @param {string} topic - Card topic to search and count Card documents and to find Lessons by its topics.
 *
 * @returns {number}
 */
async function getViewedPercent(userId) {
  try {
    const user = await User.findById(userId);
    const activeLanguage = user.languages.find((lang) => {
      return lang.language === user.activeLanguage;
    });

    // console.log({ activeLanguage });

    const [totalCardCount, userLessons] = await Promise.all([
      Card.find({ topic: activeLanguage.activeTopic[0] }).countDocuments(),
      Lesson.find({ userId, "cards.topic": activeLanguage.activeTopic[0] }),
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
