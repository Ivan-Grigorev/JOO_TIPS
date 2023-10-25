/**
 * Calculates the number of viewed cards based on view status and card view status information.
 *
 * @param {number} viewStatus - The view status of the topic.
 * @param {object} cardViewStatuses - An object containing card view status information, including "firstViewed," "secondViewed," and "thirdViewed."
 * @returns {number} The count of viewed cards based on the provided view status and card view status.
 */
function calculateViewedCardsCount(viewStatus, cardViewStatuses) {
  let viewedCardsCount = 0;

  switch (viewStatus) {
    case 1:
      viewedCardsCount = cardViewStatuses.firstViewed.length;
      break;
    case 2:
      viewedCardsCount = cardViewStatuses.secondViewed.length;
      break;
    case 3:
      viewedCardsCount = cardViewStatuses.thirdViewed.length;
      break;
    default:
      viewedCardsCount = 0;
      break;
  }

  return viewedCardsCount;
}

module.exports = calculateViewedCardsCount;
