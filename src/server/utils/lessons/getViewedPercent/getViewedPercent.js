const Lesson = require("../../../models/lessons/lessons");
const getUserLanguagesInfo = require("../getUserLanguagesInfo");
const getCardsCountByTopics = require("./utils/getCardsCountByTopic");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {string} userObject - User object which data used to search Lessons linked with user.
 *
 * @returns {number}
 */
async function getViewedPercent(userObject) {
  try {
    const user = userObject;

    const userLanguagesInfo = await getUserLanguagesInfo(user);

    console.log("userLanguagesInfo".red, userLanguagesInfo);

    const [totalCardCount, userLessons] = await Promise.all([
      getCardsCountByTopics(userLanguagesInfo.activeTopicsTitles),
      Lesson.find({
        userId: user._id,
        "cards.topic": { $in: userLanguagesInfo.activeTopicsTitles },
      }),
    ]);

    /*
     */
    console.log(`totalCardCount`.red, totalCardCount);
    console.log(`User lessons amount`.red, userLessons.length);

    // Создайте Set для хранения уникальных идентификаторов карточек
    const uniqueCardIds = new Set();

    // Извлеките уникальные идентификаторы карточек из уроков пользователя
    userLessons.forEach((lesson) => {
      lesson.cards.forEach((card) => uniqueCardIds.add(card.ref));
    });

    // Получите количество уникальных карточек, привязанных к пользователю
    const userCardCount = uniqueCardIds.size;

    // todo проверка должна осуществляться учитывая индекс просмотренности тем в массиве .
    // Рассчитайте процент привязанных карточек
    const percentage = (userCardCount / totalCardCount) * 100;

    return percentage;
  } catch (e) {
    console.error("Error getting viewed cards percent");
    throw new Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
