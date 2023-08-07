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
      topic: "Fundamentals of Express",
      subtopic: "Introduction to Express",
      flashcardsCount: 3,
      startTime: new Date(2023, 7, 9, 10, 0),
      endTime: new Date(2023, 7, 9, 11, 0),
      lessonNumber: 3,
    },
    {
      topic: "Fundamentals of Express",
      subtopic: "Routing in Express",
      flashcardsCount: 6,
      startTime: new Date(2023, 7, 10, 14, 0),
      endTime: new Date(2023, 7, 10, 16, 0),
      lessonNumber: 4,
    },
    {
      topic: "React Hooks",
      subtopic: "useState and useEffect",
      flashcardsCount: 4,
      startTime: new Date(2023, 7, 11, 9, 0),
      endTime: new Date(2023, 7, 11, 10, 30),
      lessonNumber: 1,
    },
    {
      topic: "React Hooks",
      subtopic: "useContext and useReducer",
      flashcardsCount: 5,
      startTime: new Date(2023, 7, 12, 13, 0),
      endTime: new Date(2023, 7, 12, 15, 0),
      lessonNumber: 2,
    },
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
        startAccessor="startTime"
        endAccessor="endTime"
        titleAccessor={"topic"}
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
