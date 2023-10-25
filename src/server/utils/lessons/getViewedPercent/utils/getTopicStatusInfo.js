/**
 * Retrieves the view status and card view status information for an active topic.
 *
 * @param {object} topicsStatusesObjects - An object representing the topic status, containing "viewStatus" and "cardViewStatus."
 * @returns {{viewStatus: object, cardViewStatuses: object}} An object with "viewStatus" and "cardViewStatuses" properties.
 */
function getTopicStatusInfo(topicsStatusesObjects) {
  const viewStatus = topicsStatusesObjects.viewStatus;
  const cardViewStatuses = topicsStatusesObjects.cardViewStatus;

  return { viewStatus, cardViewStatuses };
}

module.exports = getTopicStatusInfo;
