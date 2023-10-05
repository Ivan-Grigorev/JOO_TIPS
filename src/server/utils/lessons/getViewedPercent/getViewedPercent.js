const Card = require("../../../models/Card/Card");
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
    const { activeTopicsTitles } = userLanguagesInfo;

    const viewedCardsByActiveTopic = getCardsCountByTopics(userLanguagesInfo.userLanguageObject) // prettier-ignore

    const totalCardsCountByActiveToppic = await Card.find({ topic: { $in: activeTopicsTitles }}).countDocuments(); // prettier-ignore

    console.log(`totalCardCount`.red, viewedCardsByActiveTopic);
    console.log(`User lessons amount`.red, totalCardsCountByActiveToppic);

    // todo проверка должна осуществляться учитывая индекс просмотренности тем в массиве .
    // Рассчитайте процент привязанных карточек
    const percentage =
      (viewedCardsByActiveTopic.n / totalCardsCountByActiveToppic) * 100;

    return percentage;
  } catch (e) {
    console.error("Error getting viewed cards percent");
    throw new Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
