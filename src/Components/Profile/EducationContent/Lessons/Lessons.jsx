// import "./Lessons-calendar.scss";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./big-calendar.scss";

// Установка локализации календаря на базе moment.js
const localizer = momentLocalizer(moment);

const Lessons = () => {
  // Тестовые данные для графика
  const schedule = [
    {
      title: "Тест по JavaScript",
      start: new Date(2023, 7, 7, 10, 0), // 7 августа 2023 года, 10:00
      end: new Date(2023, 7, 7, 11, 0), // 7 августа 2023 года, 11:00
    },
    {
      title: "Вебинар по React",
      start: new Date(2023, 7, 8, 14, 0), // 8 августа 2023 года, 14:00
      end: new Date(2023, 7, 8, 16, 0), // 8 августа 2023 года, 16:00
    },
    // ... Добавьте больше событий по аналогии
  ];

  return (
    <>
      <Calendar
        localizer={localizer}
        views={["month"]}
        events={schedule}
        startAccessor="start"
        endAccessor="end"
      />
    </>
  );
};

export default Lessons;
