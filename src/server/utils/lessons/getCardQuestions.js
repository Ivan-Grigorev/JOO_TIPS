const Card = require("../../models/Card/Card");

async function getCardQuestions(cardId) {
  const card = await Card.findById(cardId.toString())
    .select("-_id questions")
    .lean();
    
  return card.questions;
}

module.exports = getCardQuestions;
