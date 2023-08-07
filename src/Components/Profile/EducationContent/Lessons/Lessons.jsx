// import "./Lessons-calendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./big-calendar.scss";
import CustomToolbar from "./CalendarCustomToolbar";
import { useState } from "react";
import { useEffect } from "react";
import EventModal from "./EventModal";

// Установка локализации календаря на базе moment.js
const localizer = momentLocalizer(moment);

const Lessons = () => {
  const isPastLesson = (lessonDate) => {
    return lessonDate < new Date(); // Возвращает true, если дата урока меньше текущей даты и времени
  };
  // Тестовые данные для графика
  const schedule = [
    {
      title: "Основы REACT",
      start: new Date(2023, 7, 7, 10, 0),
      end: new Date(2023, 7, 7, 11, 0),
    },
    {
      title: "Основы Express",
      start: new Date(2023, 7, 8, 14, 0),
      end: new Date(2023, 7, 8, 16, 0),
    },
    // ... Добавьте больше событий по аналогии
  ];

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setEventModalOpen(true);
  };

  const handleCloseModal = () => {
    setEventModalOpen(false);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        components={{
          toolbar: CustomToolbar,
        }}
        views={["month"]}
        events={schedule}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleEventClick} // Обработчик для клика на событие
      />

      {/* Модальное окно с информацией о событии */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={eventModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Lessons;
