const Card = require("../../models/Card/Card");

/**
 * Retrieves questions for a specific card by its ID.
 * @param {string} cardId - ID of the card to fetch questions from.
 * @returns {Promise<Array<string>>} - Promise resolving to an array of question IDs.
 */
async function getCardQuestions(cardId) {
  const card = await Card.findById(cardId.toString())
    .select("-_id questions")
    .lean();

  return card.questions.map((question) => question.toString());
}

module.exports = getCardQuestions;
