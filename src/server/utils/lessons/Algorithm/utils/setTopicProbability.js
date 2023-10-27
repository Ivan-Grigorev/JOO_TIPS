const getTopicsChances = require("../../getTechProps/utils/getTopicsChances");
/**
 * Sets the probability for selecting a topic based on its position and predefined chances.
 *
 * @async
 * @function setTopicProbability
 * @param {number} i - The position of the topic (0 for the first topic, 1 for the second, and so on).
 * @param {number} status - The complete status of the topic.
 * @returns {Promise<number>} The calculated probability for selecting the topic (in percentage).
 */
async function setTopicProbability(i, status) {
  const { n, nPlus1, nPlus2, nMinus1, completed, completedTwice } = await getTopicsChances(); // prettier-ignore

  // Calculate the probability for this topic (adjust as needed)
  let probability;
  if (i === 0) {
    probability = parseInt(n); // 100% probability for the first topic
  } else if (i === 1) {
    probability = parseInt(nPlus1); // 75% probability for the second topic
  } else if (i === 2) {
    probability = parseInt(nPlus2); // 50% probability for the third topic
  } else {
    probability = parseInt(nMinus1); // 5% probability for other topics
  }

  if (!i && status) {
    switch (status) {
      case 2:
        probability = parseInt(completed); // 50% probability for the third topic
        break;

      case 3:
        probability = parseInt(completedTwice);
        break;

      case 4:
        probability = parseInt(completedTwice);
        break;

      default:
        break;
    }
  }

  return probability;
}

module.exports = setTopicProbability;
