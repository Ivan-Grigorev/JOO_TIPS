/**
 * Randomly selects cards from a list based on their probabilities and adds them to the result set.
 *
 * @param {object[]} findCards - An array of cards to select from.
 * @param {Set} findedCards - A Set of found card identifiers.
 * @param {string[]} allTakenCards - An array of card identifiers that the user has already taken.
 * @param {number[]} cardProbabilities - An array of card selection probabilities.
 * @param {Set} cardSet - A Set of unique card identifiers.
 * @param {Set} selectedTopics - An array of selected topics.
 * @param {object} topicObj - Information about the current topic.
 */
function selectRandomCardsByProbability(
  findCards,
  findedCards,
  allTakenCards,
  cardProbabilities,
  cardSet,
  selectedTopics,
  topicObj
) {
  // Randomly select cards based on their probabilities
  findCards.forEach((card, index) => {
    const cardIdString = card._id.toString();

    // Check if the card is unique
    const isUniqueCard = !allTakenCards.includes(cardIdString) && !cardSet.has(cardIdString); // prettier-ignore

    if (isUniqueCard && Math.random() <= cardProbabilities[index]) {
      cardSet.add(cardIdString);
      findedCards.add(cardIdString);

      selectedTopics.add(topicObj.title);
    }
  });
}

module.exports = selectRandomCardsByProbability;
