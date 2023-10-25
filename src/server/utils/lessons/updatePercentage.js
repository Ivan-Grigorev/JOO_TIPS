/**
 * Module for updating the viewPercentage value in topicStatusObject.
 *
 * @param {object} userLanguageInfo - User language information containing card view data.
 * @param {object} topicStatusObject - An object representing the topic status to update the viewPercentage in.
 * @param {string} cardTopic - The identifier of the topic for which to update the viewPercentage.
 * @returns {Promise<void>} A Promise that doesn't return a value. It updates the topicStatusObject.
 */
const getViewedPercent = require("./getViewedPercent/getViewedPercent");

async function updatePercentage(
  userLanguageInfo,
  topicStatusObject,
  cardTopic
) {
  // Get information about card views
  const viewedPercent = await getViewedPercent(userLanguageInfo);

  // Update the viewPercentage value in topicStatusObject using cardTopic
  topicStatusObject.viewPercentage = viewedPercent[cardTopic].viewedPercentage; // prettier-ignore
}

module.exports = updatePercentage;
