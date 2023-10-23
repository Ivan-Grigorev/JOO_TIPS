const Card = require("../../../models/Card/Card");

/**
 * Middleware function to calculate the viewed percentage of cards for active topics.
 *
 * @param {object} userLanguageInfo - User's language information containing data for card views.
 * @returns {Promise<{ [topicTitle: string]: { cardsViewed: number, totalCards: number, viewedPercentage: number, status: number } }>} A Promise that resolves to an object where each key represents the title of an active topic (topicTitle) and the corresponding value is an object containing the count of viewed cards (cardsViewed), the total count of cards (totalCards), the viewed percentage (viewedPercentage), and the status (viewStatus) as numbers. If no viewed cards are found for a topic, cardsViewed, viewedPercentage, and status will be 0. This object represents the detailed card view information for each active topic.
 * The Promise resolves with this object once the calculations are complete.
 */
async function getViewedPercent(userLanguageInfo) {
  try {
    // Extract relevant data from userLanguageInfo
    const { userLanguageObject, activeTopicsTitles } = userLanguageInfo;
    const activeTopicsRefs = userLanguageObject.activeTopicsRefs;
    const topicStatuses = userLanguageObject.topicStatuses;

    // Convert activeTopicsRefs to an array of strings
    const activeTopicsRefsArray = activeTopicsRefs.map((obj) =>
      obj.ref.toString()
    );

    // Filter topicsStatuses to get relevant objects
    const topicsStatusesObjects = topicStatuses.filter((obj) => {
      return activeTopicsRefsArray.includes(obj.ref.toString());
    });

    const viewedCardsByActiveTopic = {};

    for (let i = 0; i < activeTopicsRefsArray.length; i++) {
      const topicTitle = activeTopicsRefsArray[i];
      const activeTopicTitle = activeTopicsTitles.find((topic) => {
        return topic.id === topicTitle;
      }).title;

      // Get the total count of cards for the active topic
      const totalCardsCount = await Card.countDocuments({
        topic: activeTopicTitle,
      });

      // Get viewStatus and cardViewStatus for the active topic
      const viewStatus = topicsStatusesObjects[i].viewStatus;
      const cardViewStatuses = topicsStatusesObjects[i].cardViewStatus;

      let viewedCardsCount = 0;

      // Calculate the count of viewed cards based on viewStatus
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

      // Calculate the percentage of viewed cards
      const percentage = (viewedCardsCount / totalCardsCount) * 100;

      // Store the information in the viewedCardsByActiveTopic object
      viewedCardsByActiveTopic[topicTitle] = {
        cardsViewed: viewedCardsCount,
        totalCards: totalCardsCount,
        viewedPercentage: percentage,
        status: viewStatus,
      };
    }

    // Return the viewedCardsByActiveTopic object
    return viewedCardsByActiveTopic;
  } catch (e) {
    console.error("Error getting viewed cards percent", e);
    throw Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
