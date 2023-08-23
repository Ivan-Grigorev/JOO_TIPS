import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CustomToolbar from "./CalendarCustomToolbar";
import EventModal from "./EventModal";
import ChakraSpinner from "../../../ChakraUI/Spinner/Spinner";

import { memo, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../../../../hooks/useModal";
import useLessons from "../../../../hooks/useLessons";
import { selectLessonsLoadingStatus } from "../../../../redux/lessons/lessons-selectors";
import { finishLesson } from "../../../../redux/lessons/lessons-operations";

import "./big-calendar.scss"; // do not swap places!
import "react-big-calendar/lib/css/react-big-calendar.css"; // do not swap places!

const Lessons = () => {
  // State to store selected event data
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Hook for managing modal state
  const { isOpen, open, close } = useModal();

  // Fetch lesson data using the hook
  const lessons = useLessons();

  const dispatch = useDispatch();

  // Loading status of lessons
  const isLoading = useSelector(selectLessonsLoadingStatus);

  // Set up calendar localization based on moment.js
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // Event click handler
  const handleEventClick = useCallback(
    (event) => {
      setSelectedEvent(event); // Set the clicked event
      open(event);
    },
    [open]
  );

  const handleFinishLesson = (lessonId) => {
    dispatch(finishLesson({ lessonId }));
    // console.log(lessonId);
  };

  // Function to add 'missed' class to missed lessons
  const addMissedClass = (events) => {
    const currentDate = new Date(); // Current date and time in the local time zone
    return events.map((event) => {
      const lessonCompleted = event.completed === true;

      const eventDate = new Date(event.lessonDate); // Convert event date to a Date object
      let className = "";

      if (eventDate < currentDate && !lessonCompleted) {
        className = "missed";
      }

      if (lessonCompleted) {
        className = "completed";
      }

      if (isSunday(eventDate)) {
        className += " module-test";
      }

      if (isLastDayOfMonth(eventDate)) {
        className += " module-test";
      }

      return { ...event, className };
    });
  };

  const isSunday = (date) => {
    return date.getDay() === 0; // 0 corresponds to Sunday
  };

  const isLastDayOfMonth = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
  };

  // Apply the function to the lessons array before using it in the Calendar
  const eventsWithMissedClass = useMemo(
    () => addMissedClass(lessons),
    [lessons]
  );

  // Customize how day numbers are displayed
  const dateFormat = useMemo(
    () => ({
      dateFormat: "D",
    }),
    []
  );

  return (
    <div className="flex" style={{ justifyContent: "center" }}>
      <Calendar
        localizer={localizer} // Set up the calendar localization
        components={{
          toolbar: CustomToolbar, // Use the custom toolbar component
        }}
        views={["month"]} // Display the calendar in month view
        events={eventsWithMissedClass} // Use the user's lessons as calendar events
        eventPropGetter={(event) => ({
          className: event.className || "",
        })}
        startAccessor="lessonDate" // Start date property for events
        endAccessor="endTime" // End date property for events
        titleAccessor={"topic"} // Title property for events
        onSelectEvent={handleEventClick} // Click event handler for events
        formats={dateFormat}
      />

      {isLoading && <ChakraSpinner />}

      {/* Event modal with event details */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isOpen}
          onClose={close}
          handleFinishLesson={handleFinishLesson}
        />
      )}
    </div>
  );
};

export default memo(Lessons);
