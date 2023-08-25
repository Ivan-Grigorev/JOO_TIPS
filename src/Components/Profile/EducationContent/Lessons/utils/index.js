export function getMissedType(missed) {
  const weekly = missed.find(isSunday);
  console.log(weekly);
  if (weekly) return "Weekly";

  const monthly = missed.find(isLastDayOfMonth);
  if (monthly) return "Monthly";

  return "Daily";
}

export const isSunday = (date) => {
  let usedDate;
  if (typeof date === "string") {
    usedDate = new Date(date);
  } else {
    usedDate = date;
  }

  return usedDate.getDay() === 0;
}; // 0 corresponds to Sunday

export const isLastDayOfMonth = (date) => {
  let usedDate;
  if (typeof date === "string") {
    usedDate = new Date(date);
  } else {
    usedDate = date;
  }
  const nextDay = usedDate;
  nextDay.setDate(date.getDate() + 1);
  return nextDay.getMonth() !== date.getMonth();
};
