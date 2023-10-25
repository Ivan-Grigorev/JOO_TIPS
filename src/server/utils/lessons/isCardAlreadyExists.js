function isCardAlreadyExists(viewStatusArray, cardId) {
  const cardExists = viewStatusArray.some((obj) => {
    return obj.cardRef.toString() === cardId;
  });

  return cardExists;
}

module.exports = isCardAlreadyExists;
