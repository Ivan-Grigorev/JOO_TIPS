const calculateViewedCardsCount = require("./calculateViewedCardsCount");
const getTopicStatusInfo = require("./getTopicStatusInfo");
const getTotalCardsCount = require("./getTotalCardsCount");

/**
 * Calculates the viewed cards count and percentage for active topics.
 *
 * @param {string[]} topicsRefsArray - An array of active topics references.
 * @param {object[]} allTopics - An array of active topics titles.
 * @param {object[]} topicsStatusesObjects - An array of topic status objects.
 * @returns {Promise<{ [topicTitle: string]: { cardsViewed: number, totalCards: number, viewedPercentage: number, status: number } }>}
 * A Promise that resolves to an object representing the detailed card view information for each active topic.
 */
async function getViewedCardsByTopic(
  topicsRefsArray,
  allTopics,
  topicsStatusesObjects
) {
  const viewedCardsByTopic = {};

  try {
    for (let i = 0; i < topicsRefsArray.length; i++) {
      const topicTitle = topicsRefsArray[i];
      const activeTopicTitle = allTopics.find((topic) => {
        return topic.id === topicTitle;
      }).title;

      // Get the total count of cards for the active topic
      const totalCardsCount = await getTotalCardsCount(activeTopicTitle);

      // Get viewStatus and cardViewStatus for the active topic
      const { viewStatus, cardViewStatuses } = getTopicStatusInfo(topicsStatusesObjects[i]); // prettier-ignore

      const viewedCardsCount = calculateViewedCardsCount(viewStatus,cardViewStatuses); // prettier-ignore

      // Calculate the percentage of viewed cards
      const percentage = Math.ceil((viewedCardsCount / totalCardsCount) * 100);

      // Store the information in the viewedCardsByActiveTopic object
      viewedCardsByTopic[topicTitle] = {
        cardsViewed: viewedCardsCount,
        totalCards: totalCardsCount,
        viewedPercentage: percentage,
        status: viewStatus,
      };
    }

    return viewedCardsByTopic;
  } catch (e) {
    console.error("Error in getViewedCardsByActiveTopic".red, e);
    throw Error(e);
  }
}

module.exports = getViewedCardsByTopic;
