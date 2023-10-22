const Card = require("../../../models/Card/Card");
const getCardsCountByTopics = require("./utils/getCardsCountByTopic");

/**
 * Middleware function to calculate the viewed percentage of cards for active topics.
 *
 * @param {object} userLanguageInfo - User's language information containing data for card views.
 * @returns {Promise<{ [topicTitle: string]: number }>} A Promise that resolves to an object where each key represents the title of an active topic (topicTitle) and the corresponding value is the count of viewed cards for that topic as a number. If no viewed cards are found for a topic, the count will be 0. This object represents the viewed card counts for each active topic.
 * The Promise resolves with this object once the calculations are complete.
 */
async function getViewedPercent(userLanguageInfo) {
  try {
    const { userLanguageObject, activeTopicsTitles } = userLanguageInfo;

    // Extract active topics references from userLanguageObject.
    const activeTopicsRefs = userLanguageObject.activeTopicsRefs;

    // Extract topic statuses from userLanguageObject.
    const topicStatuses = userLanguageObject.topicStatuses;

    // Create an array of topic refs as strings.
    const activeTopicsRefsArray = activeTopicsRefs.map((obj) =>
      obj.ref.toString()
    );

    // Filter topic status objects based on active topic refs.
    const topicsStatusesObjects = topicStatuses.filter((obj) => {
      return activeTopicsRefsArray.includes(obj.topicRef.toString());
    });

    const viewedCardsByActiveTopic = {};
    for (let i = 0; i < activeTopicsRefsArray.length; i++) {
      const topicTitle = activeTopicsRefsArray[i];

      // Find the corresponding active topic title from the provided titles array.
      const activeTopicTitle = activeTopicsTitles.find((topic) => {
        return topic.id === topicTitle;
      }).title;

      // Count the total number of cards for the active topic.
      const totalCardsCount = await Card.countDocuments({
        topic: activeTopicTitle,
      });

      const viewStatus = topicsStatusesObjects[i].viewStatus;
      const cardViewStatuses = topicsStatusesObjects[i].cardViewStatus;

      let viewedCardsCount = 0;

      // Determine the count of viewed cards based on the viewStatus.
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

    console.log("viewedCardsByActiveTopic".red, viewedCardsByActiveTopic);

    return viewedCardsByActiveTopic;
  } catch (e) {
    console.error("Error getting viewed cards percent", e);
    throw Error("Error getting viewed cards percent", e);
  }
}

module.exports = getViewedPercent;
