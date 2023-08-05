import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Lessons-calendar.scss";

const Lessons = () => {
  // Current year
  const currentYear = new Date().getFullYear();

  // Set the minimum date to the first day of the current year
  const minDate = new Date(currentYear, 0, 1); // January 1st of the current year

  // Set the maximum date to the last school month (June) of the next year
  const nextYear = currentYear + 1;
  const maxDate = new Date(nextYear, 5, 30); // June 30th of the next year

  return (
    <>
      <Calendar
        calendarType="gregory" // Use "gregory" for the Gregorian calendar
        locale="en-US" // Use "en-US" to display days of the week in English
        view="month" // Display a month at a time
        minDetail="month" // The smallest view is a month
        maxDetail="month" // The largest view is a month
        minDate={minDate} // Apply the minimum date here
        maxDate={maxDate} // Apply the maximum date here
      />
    </>
  );
};

export default Lessons;
