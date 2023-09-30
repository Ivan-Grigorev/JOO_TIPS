const moment = require("moment");

/**
 * Retrieves an array of days in the current month and the current week.
 *
 * @returns {Object} An object containing two arrays:
 *   - week (string[]): An array of dates representing the days in the current week (format: "DD.MM.YYYY").
 *   - month (string[]): An array of dates representing the days in the current month (format: "DD.MM.YYYY").
 */
function getDaysInMonthAndWeek() {
  const currentDate = moment();

  const daysInMonth = [];
  const daysInWeek = [];

  // Создаем массив дней в месяце
  const firstDayOfMonth = currentDate.clone().startOf("month");
  const lastDayOfMonth = currentDate.clone().endOf("month");

  // Используем метод range, чтобы сгенерировать даты для всего месяца
  const currentDay = firstDayOfMonth.clone();
  while (currentDay.isSameOrBefore(lastDayOfMonth, "day")) {
    daysInMonth.push(currentDay.format("DD.MM.YYYY"));
    currentDay.add(1, "day");
    // console.count("monthWhile"); // debug counting how many times was called loop
  }

  // Создаем массив дней в текущей неделе
  const lastDayOfWeek = currentDate.clone().endOf("week");
  currentDay.subtract(currentDate.isoWeekday() - 1, "days"); // Перемещаемся к началу недели
  while (currentDay.isSameOrBefore(lastDayOfWeek, "day")) {
    daysInWeek.push(currentDay.format("DD.MM.YYYY"));
    currentDay.add(1, "day");
    // console.count("weekWhile"); // debug counting how many times was called loop
  }

  // console.log("Days in Month:", daysInMonth);
  // console.log("Days in Week:", daysInWeek);

  return { week: daysInWeek, month: daysInMonth };
}

module.exports = getDaysInMonthAndWeek;
