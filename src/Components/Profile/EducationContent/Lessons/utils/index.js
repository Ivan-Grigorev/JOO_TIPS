import moment from "moment";
// Добавим константы для радиусов дат
const DAILY_RADIUS = 2;
const WEEKLY_RADIUS = 7;

// Function to determine the type of missed lessons
export function getMissedType(missed) {
  const output = {
    // daily: false,
    weekly: false,
    // monthly: false,
  };

  console.log(missed);

  // Check for monthly missed lesson
  // const monthly = missed.find(isLastDayOfMonth);
  // if (monthly) output.monthly = true;

  const weekly = findMissedWeekLessons(missed);
  if (weekly.length > 0) output.weekly = true;

  // Default to daily missed lesson
  // const dailyMissed = findMissedInLastDays(missed, DAILY_RADIUS);

  // if (dailyMissed.length > 0) {
  //   output.daily = true;
  // }

  return output;
}

export const findMissedWeekLessons = (lessons) => {
  const currentSunday = moment().startOf("week");

  return lessons.filter((day) => {
    const dayMoment = moment(day);
    const diff = dayMoment.diff(currentSunday, "days");

    return diff >= 0 && diff <= 7 && dayMoment.day() === 0;
  });
};

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
  return !nextDay.isSame(inputDate, "month");
};
