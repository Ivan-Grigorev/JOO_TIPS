const moment = require("moment");

function getCurrentDate() {
  const currentDate = moment();
  const formattedCurrentDate = currentDate.format("DD.MM.YYYY");
  const currentDayOfWeek = moment().isoWeekday(); // Получаем текущий день недели (1 - понедельник, 2 - вторник, и так далее, 7 - воскресенье)
  const daysUntilSunday = 7 - currentDayOfWeek; // остаток дней до субботы
  const expiredDate = currentDate
    .clone()
    .add(1, "days")
    .set({ hour: 3, minute: 0, second: 0 })
    .format("DD.MM.YYYY");

  console.log(`Current date - ${currentDate}`.yellow);
  console.log(`Formatted current date  - ${formattedCurrentDate}`.yellow);
  console.log(`Current day of week date - ${currentDayOfWeek}`.yellow);
  console.log(`Expired date - ${expiredDate}`.yellow);
  console.log(`Days until the Sunday - ${daysUntilSunday}`.yellow);

  return {
    currentDate,
    formattedCurrentDate,
    currentDayOfWeek,
    daysUntilSunday,
    expiredDate,
  };
}

module.exports = getCurrentDate;
