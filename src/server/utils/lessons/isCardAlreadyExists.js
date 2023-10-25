/**
 * Checks if a card with the given ID already exists in the view status array.
 *
 * @param {Array} viewStatusArray - The array representing the view status.
 * @param {string} cardId - The ID of the card to check for.
 * @returns {boolean} True if the card exists in the array, otherwise false.
 */
function isCardAlreadyExists(viewStatusArray, cardId) {
  /**
   * Check if a card with the specified ID exists in the view status array.
   *
   * @param {Object} obj - An object in the view status array.
   * @returns {boolean} True if the card exists, otherwise false.
   */
  const cardExists = viewStatusArray.some((obj) => {
    return obj.cardRef.toString() === cardId;
  });

  return cardExists;
}

module.exports = isCardAlreadyExists;
