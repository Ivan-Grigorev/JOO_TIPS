import moment from "moment";

// Function to determine the type of missed lessons
export function getMissedType(missed) {
  // Check for monthly missed lesson
  const monthly = missed.find(isLastDayOfMonth);
  if (monthly) return "Monthly";

  // Check for weekly missed lesson
  const weekly = missed.find(isSunday);
  if (weekly) return "Weekly";

  // Default to daily missed lesson
  return "Daily";
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
