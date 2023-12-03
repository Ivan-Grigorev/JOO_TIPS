require("moment");

function isMonday(date) {
  return date.day() === 1;
}

function isEndOfWeek(date) {
  return date.isSame(date.endOf("week"));
}

function isEndOfMonth(date) {
  return date.isSame(date.endOf("month"));
}

function isInWorkingRange(currentDate) {
  return (
    isMonday(currentDate) ||
    isEndOfWeek(currentDate) ||
    isEndOfMonth(currentDate)
  );
}

module.exports = { isMonday, isEndOfWeek, isEndOfMonth, isInWorkingRange };
