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

  // Check for weekly missed lesson
  const weekly = missed.find(isSunday);
  if (weekly) output.weekly = true;

  // Default to daily missed lesson
  if (!output.daily && !output.weekly) output.daily = true;
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
