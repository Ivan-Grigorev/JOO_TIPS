const getCardQuestions = require("./getCardQuestions");

/**
 * Retrieves questions for an array of card IDs.
 * @param {Array<string>} cardIDs - Array of card IDs to fetch questions for.
 * @returns {Promise<Array<string>>} - Promise resolving to an array of question IDs for the first card in the input array.
 */
async function getCardsQuestions(cardIDs) {
  try {
    const questions = await getCardQuestions(cardIDs[0]);

    return questions;
  } catch (e) {
    console.error(`Error getting cards questions: ${e}`.red);
    console.error(e);
  }
}

module.exports = getCardsQuestions;
