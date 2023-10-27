const getTopicsChances = require("../../getTechProps/utils/getTopicsChances");
/**
 * Sets the probability for selecting a topic based on its position and predefined chances.
 *
 * @async
 * @function setTopicProbability
 * @param {number} i - The position of the topic (0 for the first topic, 1 for the second, and so on).
 * @returns {Promise<number>} The calculated probability for selecting the topic (in percentage).
 */
async function setTopicProbability(i) {
  const { n, nPlus1, nPlus2, nMinus1 } = await getTopicsChances();

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

  return probability;
}

module.exports = setTopicProbability;
