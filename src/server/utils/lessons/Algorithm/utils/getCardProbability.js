/**
 * Calculates the probability of selecting each card within a topic based on the overall topic probability.
 *
 * @param {string[]} findedCards - Set of found card identifiers within the topic.
 * @param {number} probability - Probability of selecting the entire topic (in percentage).
 * @returns {number[]} An array of card selection probabilities for each card within the topic.
 */
function getCardProbability(findedCards, probability) {
  // Calculate the probability of selecting each card within the topic
  const cardProbabilities = findedCards.map(
    () => probability / findedCards.length
  );

  return cardProbabilities;
}

module.exports = getCardProbability;
