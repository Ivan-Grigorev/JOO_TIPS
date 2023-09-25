/**
 * @function isTodaySunday
 * @description Checks if the current day of the week is Sunday (7).
 *
 * @param {number} currentDayOfWeek - The current day of the week (1 for Monday, 2 for Tuesday, ..., 7 for Sunday).
 *
 * @returns {boolean} Returns true if the current day of the week is Sunday (7), otherwise returns false.
 */
function isTodaySunday(currentDayOfWeek) {
  if (currentDayOfWeek === 7) {
    // If the current day of the week is 7 (Sunday), return true
    return true;
  }
  // If the current day of the week is not 7 (Sunday), return false
  return false;
}

module.exports = isTodaySunday;
