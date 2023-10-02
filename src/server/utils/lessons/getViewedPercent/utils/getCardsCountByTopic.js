const Card = require("../../../../models/Card/Card");

/**
 * Get the count of cards by topics.
 *
 * @param {string[]} topicsArray - An array of topic strings to search for.
 * @returns {Promise<{ n: number, nPlus1: number, nPlus2: number, nMinus1: number }>} - A Promise that resolves to an object with counts for each topic.
 * @throws {Error} If there is an error while fetching the counts.
 */
async function getCardsCountByTopics(topicsArray) {
  try {
    const [n, nPlus1, nPlus2, nMinus1] = await Promise.all([
      Card.find({ topic: topicsArray[0] }).countDocuments(),
      Card.find({ topic: topicsArray[1] }).countDocuments(),
      Card.find({ topic: topicsArray[2] }).countDocuments(),
      Card.find({ topic: topicsArray[3] }).countDocuments(),
    ]);

    return { n, nPlus1, nPlus2, nMinus1 };
  } catch (e) {
    console.error("Error getting cards count by topics", e);
    throw new Error("Error getting cards count by topics", e);
  }
}

module.exports = getCardsCountByTopics;
