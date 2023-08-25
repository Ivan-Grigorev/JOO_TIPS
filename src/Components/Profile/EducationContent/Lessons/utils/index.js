import moment from "moment";

export function getMissedType(missed) {
  const monthly = missed.find(isLastDayOfMonth);
  if (monthly) return "Monthly";

  const weekly = missed.find(isSunday);
  if (weekly) return "Weekly";

  return "Daily";
}

export const isSunday = (date) => {
  const usedDate = moment(date);
  return usedDate.day() === 0; // 0 corresponds to Sunday
};

export const isLastDayOfMonth = (inputDate) => {
  const nextDay = moment(inputDate).add(1, "day");
  return !nextDay.isSame(inputDate, "month");
};
