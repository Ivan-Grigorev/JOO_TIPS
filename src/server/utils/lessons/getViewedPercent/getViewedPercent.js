const Card = require("../../../models/Card/Card");
const getCardsCountByTopics = require("./utils/getCardsCountByTopic");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {string} userObject - User object which data used to search Lessons linked with user.
 *
 * @returns {<Promise<number>>}
 */
async function getViewedPercent(userLanguageInfo) {
  try {
    const { activeTopicsTitles, userLanguageObject } = userLanguageInfo;
    console.log("activeTopicsTitles".red, activeTopicsTitles);

    // todo сделать цикл for для каждой из тем, чтобы узнать процент просмотра каждой темы
    const totalCardsCountByActiveTopic = await Card.find({ topic: { $in: activeTopicsTitles }}).countDocuments(); // prettier-ignore

    const viewedCardsByActiveTopic = getCardsCountByTopics(userLanguageObject) // prettier-ignore

    console.log(`totalCardCount`.red, viewedCardsByActiveTopic);
    // console.log(`User lessons amount`.red, totalCardsCountByActiveToppic);

    // todo проверка должна осуществляться учитывая индекс просмотренности тем в массиве .
    // Рассчитайте процент привязанных карточек
    const percentage =
      (viewedCardsByActiveTopic.n / totalCardsCountByActiveTopic) * 100;

    return percentage;
  } catch (e) {
    console.error("Error getting viewed cards percent");
    throw new Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
