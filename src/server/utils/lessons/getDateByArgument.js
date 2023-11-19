const moment = require("moment");

/**
 * @function getDateByArgument
 * @description Retrieves and formats the current date along with additional date-related information.
 *
 * @returns {{currentDate: number, formattedCurrentDate: string, regexpCurrentDate: string, currentDayOfWeek: number, daysUntilSunday: number, expiredDate: string,  lastDayOfMonth: string, firstSundayOfMonth: string  }} An object containing the following properties:
 *   - currentDate (moment): The current date as a moment.js object.
 *   - formattedCurrentDatetime (string): The current date in the "DD.MM.YYYY HH:mm" format.
 *   - currentDayOfWeek (number): The current day of the week (1 for Monday, 2 for Tuesday, ..., 7 for Sunday).
 *   - daysUntilSunday (number): The number of days remaining until Sunday.
 *   - expiredDate (string): A formatted date representing the next day at 3:00 AM.
 */
function getDateByArgument(testDate) {
  const currentDate = moment(testDate);
  const formattedCurrentDatetime = currentDate.format("DD.MM.YYYY HH:mm");
  const regexpCurrentDate = new RegExp(currentDate.format('DD.MM.YYYY').replace(/\./g, "\\.")); // prettier-ignore
  const currentDayOfWeek = moment(testDate).isoWeekday(); // Получаем текущий день недели (1 - понедельник, 2 - вторник, и так далее, 7 - воскресенье)
  const daysUntilSunday = 7 - currentDayOfWeek; // остаток дней до субботы
  const expiredDate = currentDate
    .clone()
    .add(1, "days")
    .set({ hour: 3, minute: 0, second: 0 })
    .format("DD.MM.YYYY HH:mm");

  // for tests
  const lastDayOfMonth = currentDate
    .clone()
    .endOf("month")
    .format("DD.MM.YYYY HH:mm"); // последний день месяца
  const firstSundayOfMonth = currentDate
    .clone()
    .startOf("month")
    .day("Sunday")
    .format("DD.MM.YYYY HH:mm"); // первое воскресенье месяца

  // console.log(`moment() current date - ${currentDate}`.yellow);
  // console.log(`Current datetime  - ${formattedCurrentDatetime}`.yellow);
  // console.log(`Regexp current date  - ${regexpCurrentDate}`.yellow);
  // console.log(`Current day of week date - ${currentDayOfWeek}`.yellow);
  // console.log(`Expired date - ${expiredDate}`.yellow);
  // console.log(`Days until the Sunday - ${daysUntilSunday}`.yellow);

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

module.exports = getDateByArgument;
