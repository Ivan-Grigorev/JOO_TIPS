// Function to check if the current day of the week is Sunday
function isTodaySunday(currentDayOfWeek) {
  if (currentDayOfWeek === 7) {
    // If the current day of the week is 7 (Sunday), return true
    return true;
  }
  // If the current day of the week is not 7 (Sunday), return false
  return false;
}

module.exports = isTodaySunday;
