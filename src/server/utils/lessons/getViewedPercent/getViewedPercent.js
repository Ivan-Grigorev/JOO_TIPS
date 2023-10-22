const Card = require("../../../models/Card/Card");
const getCardsCountByTopics = require("./utils/getCardsCountByTopic");

/**
 * @description Middleware to count viewed percent of the cards.
 *
 * @param {object} userLanguageInfo - User object which data used to search Lessons linked with user.
 *
 * @returns {<Promise<number>>}
 */
async function getViewedPercent(userLanguageInfo) {
  try {
    const { userLanguageObject, activeTopicsTitles } = userLanguageInfo;
    const activeTopicsRefs = userLanguageObject.activeTopicsRefs; // Извлекаем массив активных тем из объекта `userLanguageObject`
    const topicStatuses = userLanguageObject.topicStatuses; // Извлекаем объект статусов тем из объекта `userLanguageObject`

    // Определяем массив рефов для активных тем
    const activeTopicsRefsArray = activeTopicsRefs.map((obj) =>
      obj.ref.toString()
    );
    // Определяем массив с объектами статусов тем
    const topicsStatusesObjects = topicStatuses.filter((obj) => {
      return activeTopicsRefsArray.includes(obj.topicRef.toString());
    });

    const viewedCardsByActiveTopic = {};

    for (let i = 0; i < activeTopicsRefsArray.length; i++) {
      const topicTitle = activeTopicsRefsArray[i];
      const activeTopicTitle = activeTopicsTitles.find((topic) => {
        return topic.id === topicTitle;
      }).title;

      const totalCardsCount = await Card.countDocuments({
        topic: activeTopicTitle,
      });

      const viewStatus = topicsStatusesObjects[i].viewStatus;
      const cardViewStatuses = topicsStatusesObjects[i].cardViewStatus;

      let viewedCardsCount = 0;

      switch (viewStatus) {
        case 1:
          viewedCardsCount = cardViewStatuses.firstViewed.length;
          break;
        case 2:
          viewedCardsCount = cardViewStatuses.secondViewed.length;
          break;
        case 3:
          viewedCardsCount = cardViewStatuses.thirdViewed.length;
          break;
        default:
          viewedCardsCount = 0;
          break;
      }

      viewedCardsByActiveTopic[topicTitle] = viewedCardsCount;

      const percentage = (viewedCardsCount / totalCardsCount) * 100;
      console.log(
        `Topic: ${topicTitle}, Cards viewed: ${viewedCardsCount}, Total cards: ${totalCardsCount}, Viewed percentage: ${percentage}%`
          .yellow
      );
    }

    return viewedCardsByActiveTopic;
  } catch (e) {
    console.error("Error getting viewed cards percent", e);
    throw Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
