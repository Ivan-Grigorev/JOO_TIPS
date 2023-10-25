/**
 * Move a card to the next array in the card view status based on its position.
 *
 * @param {Object} cardViewStatus - The object representing card view status.
 * @param {string} viewNumber - The current view number.
 * @param {number} cardIndex - The index of the card in the current view.
 * @param {string} cardId - The ID of the card to move.
 */
function moveCardToNextArray(cardViewStatus, viewNumber, cardIndex, cardId) {
  /**
   * Calculate the next view and the index of the card in the current view.
   */
  const nextView = Object.keys(cardViewStatus)[cardIndex + 1];
  const existedCardIndex = cardViewStatus[viewNumber].findIndex(
    (obj) => obj.cardRef === cardId
  );

  // Remove the card from the current array and add it to the next array
  const removedCard = cardViewStatus[viewNumber].splice(existedCardIndex, 1);
  cardViewStatus[nextView].push(removedCard[0]);

  console.log(`Moving the card to the ${nextView} array.`.yellow);
}

module.exports = moveCardToNextArray;
