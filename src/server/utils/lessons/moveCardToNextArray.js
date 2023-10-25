function moveCardToNextArray(cardViewStatus, viewNumber, cardIndex, cardId) {
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
