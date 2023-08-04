import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Lessons-calendar.scss'

const Lessons = () => {
  return (
    <>
      <Calendar
        calendarType="gregory" // используйте "US" для начала недели с воскресенья
        locale="en-US" // используйте "en-US" для отображения дней недели на английском языке
      />
    </>
  );
};

export default Lessons;
