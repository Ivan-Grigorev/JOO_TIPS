const getViewedCardsByActiveTopic = require("./utils/getViewedCardsByActiveTopic");

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
    const { activeTopicsRefs, topicStatuses } = userLanguageObject;

    // Convert activeTopicsRefs to an array of strings
    const activeTopicsRefsArray = activeTopicsRefs.map((obj) =>
      obj.ref.toString()
    );

    // Filter topicsStatuses to get relevant objects
    const topicsStatusesObjects = topicStatuses.filter((obj) => {
      return activeTopicsRefsArray.includes(obj.ref.toString());
    });

    const viewedCardsByActiveTopic = await getViewedCardsByActiveTopic(
      activeTopicsRefsArray,
      activeTopicsTitles,
      topicsStatusesObjects
    );
    return viewedCardsByActiveTopic;
  } catch (e) {
    console.error("Error getting viewed cards percent", e);
    throw Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
