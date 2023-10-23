const moment = require("moment");

/**
 * Calculates the difference in days between the current date and the provided activation date.
 *
 * @param {string} activationDate - The activation date in "DD.MM.YYYY" format.
 * @returns {number} - The number of days between the current date and the activation date.
 */
function calculateDaysDifference(activationDate) {
  // Get the current date
  const currentDate = moment();

  // Parse the provided activation date in "DD.MM.YYYY" format
  const lastTopicActivationDate = moment(activationDate, "DD.MM.YYYY");

  // Calculate the difference in days
  const daysDifference = moment(currentDate, "DD.MM.YYYY").diff(
    lastTopicActivationDate,
    "days"
  );

  return daysDifference;
}

module.exports = calculateDaysDifference;
