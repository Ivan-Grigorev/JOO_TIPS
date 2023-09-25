/**
 * Checks if the current date is the last day of the month.
 *
 * @param {string} currentDate - The current date represented as a moment.js object.
 * @returns {boolean}  True if it's the last day of the month, false otherwise.
 * Dependencies: Requires the 'moment' library for date manipulation.
 * Notes/Considerations: This function is based on moment.js and assumes a valid moment object as input.
 */
function isTodayEndOfTheMonth(currentDate) {
  // Get the day of the month
  const currentDayOfMonth = currentDate.date();

  // Get the total number of days in the current month
  const daysInCurrentMonth = currentDate.daysInMonth();

  // Check if today is the last day of the month
  if (currentDayOfMonth === daysInCurrentMonth) {
    // If the current day of the month equals the total days in the month, return true
    return true;
  }
  // If today is not the last day of the month, return false
  return false;
}

module.exports = isTodayEndOfTheMonth;
