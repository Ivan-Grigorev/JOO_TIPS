// Function to check if the current date is the last day of the month
// used with moment.js
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
