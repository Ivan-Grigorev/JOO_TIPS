const moment = require("moment");

/**
 * @function getCurrentDate
 * @description Retrieves and formats the current date along with additional date-related information.
 *
 * @returns {{
 *   currentDate: moment,
 *   formattedCurrentDate: string,
 *   regexpCurrentDate: string,
 *   currentDayOfWeek: number,
 *   daysUntilSunday: number,
 *   expiredDate: string,
 *   lastDayOfMonth: string,
 *   firstSundayOfMonth: string
 * }} An object containing the following properties:
 *   - currentDate (moment): The current date as a moment.js object.
 *   - formattedCurrentDate (string): The current date in the "DD.MM.YYYY HH:mm" format.
 *   - regexpCurrentDate (string): A regular expression string representing the current date.
 *   - currentDayOfWeek (number): The current day of the week (1 for Monday, 2 for Tuesday, ..., 7 for Sunday).
 *   - daysUntilSunday (number): The number of days remaining until Sunday.
 *   - expiredDate (string): A formatted date representing the next day at 3:00 AM.
 *   - lastDayOfMonth (string): The formatted date for the last day of the current month.
 *   - firstSundayOfMonth (string): The formatted date for the first Sunday of the current month.
 */
function getCurrentDate() {
  const currentDate = moment(); // Get the current date using moment.js
  const formattedCurrentDatetime = currentDate.format("DD.MM.YYYY HH:mm"); // Format the current date
  const regexpCurrentDate = new RegExp(
    currentDate.format("DD.MM.YYYY").replace(/\./g, "\\.")
  ); // Create a regular expression for the current date

  // Get the current day of the week (1 - Monday, 2 - Tuesday, ..., 7 - Sunday)
  const currentDayOfWeek = moment().isoWeekday();

  const daysUntilSunday = 7 - currentDayOfWeek; // Calculate the remaining days until Sunday
  const expiredDate = currentDate
    .clone()
    .add(1, "days")
    .set({ hour: 3, minute: 0, second: 0 })
    .format("DD.MM.YYYY HH:mm"); // Calculate the next day at 3:00 AM

  // For tests
  const lastDayOfMonth = currentDate
    .clone()
    .endOf("month")
    .format("DD.MM.YYYY HH:mm"); // Get the last day of the current month
  const firstSundayOfMonth = currentDate
    .clone()
    .startOf("month")
    .day("Sunday")
    .format("DD.MM.YYYY HH:mm"); // Get the first Sunday of the current month

  return {
    currentDate,
    formattedCurrentDate: formattedCurrentDatetime,
    regexpCurrentDate,
    currentDayOfWeek,
    daysUntilSunday,
    expiredDate,
    lastDayOfMonth,
    firstSundayOfMonth,
  };
}

module.exports = getCurrentDate;
