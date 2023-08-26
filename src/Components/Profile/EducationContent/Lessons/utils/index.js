import moment from "moment";

// Function to determine the type of missed lessons
export function getMissedType(missed) {
  const output = {
    daily: false,
    weekly: false,
    monthly: false,
  };

  // Check for monthly missed lesson
  const monthly = missed.find(isLastDayOfMonth);
  if (monthly) output.monthly = true;

  const weekly = missed.filter(findMissedWeekLesson);
  if (weekly.length > 0) output.weekly = true;

  // Default to daily missed lesson
  const dailyMissed = findMissedInLast2Days(missed);

  if (dailyMissed.length > 0) {
    output.daily = true;
  }

  return output;
}

// Function to check if a date is a Sunday
export const isSunday = (date) => {
  const usedDate = moment(date);
  return usedDate.day() === 0; // 0 corresponds to Sunday
};

// Function to check if a date is the last day of the month
export const isLastDayOfMonth = (inputDate) => {
  const nextDay = moment(inputDate).add(1, "day");
  return !nextDay.isSame(inputDate, "month");
};

const missedToday = (day) => {
  const today = moment();
  const dayMoment = moment(day);
  return dayMoment.isSame(today, "day");
};

const findMissedWeekLesson = (day) => {
  // Check for weekly missed lesson
  const currentSunday = moment().startOf("week"); // Находим воскресение текущей недели

  const dayMoment = moment(day);

  // Сравниваем с воскресеньем текущей недели
  const diff = dayMoment.diff(currentSunday, "days");

  return diff >= 0 && diff <= 7 && dayMoment.day() === 0;
};

// Проверка диапазона дат
const isMissedInLast2Days = (day) => {
  const today = moment();
  const dayMoment = moment(day);

  const diff = today.diff(dayMoment, "days");

  return diff >= 0 && diff <= 2;
};

const findMissedInLast2Days = (lessons) => {
  return lessons.filter(isMissedInLast2Days);
};
