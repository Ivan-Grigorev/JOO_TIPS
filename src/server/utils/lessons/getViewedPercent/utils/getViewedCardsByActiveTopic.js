const calculateViewedCardsCount = require("./calculateViewedCardsCount");
const getTopicStatusInfo = require("./getTopicStatusInfo");
const getTotalCardsCount = require("./getTotalCardsCount");

/**
 * Calculates the viewed cards count and percentage for active topics.
 *
 * @param {string[]} activeTopicsRefsArray - An array of active topics references.
 * @param {object[]} activeTopicsTitles - An array of active topics titles.
 * @param {object[]} topicsStatusesObjects - An array of topic status objects.
 * @returns {Promise<{ [topicTitle: string]: { cardsViewed: number, totalCards: number, viewedPercentage: number, status: number } }>}
 * A Promise that resolves to an object representing the detailed card view information for each active topic.
 */
async function getViewedCardsByActiveTopic(
  activeTopicsRefsArray,
  activeTopicsTitles,
  topicsStatusesObjects
) {
  const viewedCardsByActiveTopic = {};

  try {
    for (let i = 0; i < activeTopicsRefsArray.length; i++) {
      const topicTitle = activeTopicsRefsArray[i];
      const activeTopicTitle = activeTopicsTitles.find((topic) => {
        return topic.id === topicTitle;
      }).title;

      // Get the total count of cards for the active topic
      const totalCardsCount = await getTotalCardsCount(activeTopicTitle);

      // Get viewStatus and cardViewStatus for the active topic
      const { viewStatus, cardViewStatuses } = getTopicStatusInfo(topicsStatusesObjects[i]); // prettier-ignore

      const viewedCardsCount = calculateViewedCardsCount(viewStatus,cardViewStatuses); // prettier-ignore

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

    return viewedCardsByActiveTopic;
  } catch (e) {
    console.error("Error in getViewedCardsByActiveTopic".red, e);
    throw Error(e);
  }
}

module.exports = getViewedCardsByActiveTopic;
