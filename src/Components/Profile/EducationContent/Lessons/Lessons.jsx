// import "./Lessons-calendar.scss";
import "./big-calendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CalendarCustomToolbar";
import { memo, useCallback, useMemo, useState } from "react";
import EventModal from "./EventModal";
import { useSelector } from "react-redux";
import { selectUserLessons } from "../../../../redux/lessons/lessons-selectors";
import ChakraSpinner from "../../../ChakraUI/Spinner/Spinner";
import useModal from "../../../../hooks/useModal";
import useLessons from "../../../../hooks/useLessons";

const Lessons = () => {
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event data
  const events = useSelector(selectUserLessons); // Get user's lessons using a selector

  const { isOpen, open, close } = useModal();
  const lessons = useLessons();

  const localizer = useMemo(() => momentLocalizer(moment), []); // Set up calendar localization based on moment.js

  const handleEventClick = useCallback(
    (event) => {
      setSelectedEvent(event); // Set the clicked event
      // setEventModalOpen(true); // Open the event modal
      open(event);
    },
    [open]
  );

  const dateFormat = useMemo(
    () => ({
      dateFormat: "D",
    }),
    []
  ); // Customize how day numbers are displayed

  return (
    <>
      <Calendar
        localizer={localizer} // Set up the calendar localization
        components={{
          toolbar: CustomToolbar, // Use the custom toolbar component
        }}
        views={["month"]} // Display the calendar in month view
        events={lessons} // Use the user's lessons as calendar events
        startAccessor="lessonDate" // Start date property for events
        endAccessor="endTime" // End date property for events
        titleAccessor={"topic"} // Title property for events
        onSelectEvent={handleEventClick} // Click event handler for events
        formats={dateFormat}
      />
      {events.length === 0 && <ChakraSpinner />}

      {/* Event modal with event details */}
      {selectedEvent && (
        <EventModal event={selectedEvent} isOpen={isOpen} onClose={close} />
      )}
    </>
  );
};

export default memo(Lessons);
