import moment from "moment";
// Добавим константы для радиусов дат
const DAILY_RADIUS = 2;
const WEEKLY_RADIUS = 7;

// Function to determine the type of missed lessons
export function getMissedType(missed) {
  const output = {
    daily: false, // Initialize daily missed lesson flag
    weekly: false, // Initialize weekly missed lesson flag
    monthly: false, // Initialize monthly missed lesson flag
  };

  // Check for monthly missed lesson
  const monthly = missed.find(isLastDayOfMonth);
  if (monthly) output.monthly = true;

  // Find weekly missed lessons
  const weekly = findMissedWeekLessons(missed);
  if (weekly.length > 0) output.weekly = true;

  // Default to daily missed lesson
  const dailyMissed = findMissedInLastDays(missed, DAILY_RADIUS);

  if (dailyMissed.length > 0) {
    output.daily = true;
  }

  return output;
}

// Find lessons missed in the current week
export const findMissedWeekLessons = (lessons) => {
  const currentSunday = moment().startOf("week");

  return lessons.filter((day) => {
    const dayMoment = moment(day);
    const diff = dayMoment.diff(currentSunday, "days");

    // Check if the day is within the current week's radius and is a Sunday
    return diff >= 0 && diff <= WEEKLY_RADIUS && dayMoment.day() === 0;
  });
};

// Find lessons missed in the specified number of days
export const findMissedInLastDays = (lessons, days) => {
  const today = moment();

  return lessons.filter((day) => {
    const dayMoment = moment(day);

    // Check if the day is within the specified radius
    return (
      today.diff(dayMoment, "days") >= 0 &&
      today.diff(dayMoment, "days") <= days
    );
  });
};

// Function to check if a date is a Sunday
export const isSunday = (date) => {
  const usedDate = moment(date);
  return usedDate.day() === 0; // 0 corresponds to Sunday
};

// Function to check if a date is the last day of the month
export const isLastDayOfMonth = (inputDate) => {
  const nextDay = moment(inputDate).add(1, "day");

  // Check if the next day is in a different month
  return !nextDay.isSame(inputDate, "month");
};
