/**
 * Gets the last active topic from the provided topicsViewedPercentage object.
 *
 * @param {Object} topicsViewedPercentage - An object containing viewed card percentages for active topics.
 * @returns {{cardsViewed: number, totalCards: number, viewedPercentage: number, status: number }} The last active topic with its corresponding properties:
 */
function getLastActiveTopic(topicsViewedPercentage) {
  // Get the keys array of the topicsViewedPercentage object
  const keys = Object.keys(topicsViewedPercentage);

  // Get the last key
  const lastKey = keys[keys.length - 1];

  // Extract the last active topic using the last key
  const lastActiveTopic = topicsViewedPercentage[lastKey];

  // Return the last active topic
  return lastActiveTopic;
}

module.exports = getLastActiveTopic;
