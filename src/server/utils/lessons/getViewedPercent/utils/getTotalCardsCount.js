const Card = require("../../../../models/Card/Card");

/**
 * Retrieves the total count of cards for a specific active topic.
 *
 * @param {string} activeTopicTitle - The title of the active topic for which to get the total card count.
 * @returns {Promise<number>} A Promise that resolves to the total count of cards for the specified active topic.
 */
async function getTotalCardsCount(activeTopicTitle) {
  return await Card.countDocuments({ topic: activeTopicTitle });
}

module.exports = getTotalCardsCount;
