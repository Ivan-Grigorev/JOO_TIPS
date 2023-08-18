// import "./Lessons-calendar.scss";
import "./big-calendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CalendarCustomToolbar";
import { memo, useCallback, useMemo, useState } from "react";
import EventModal from "./EventModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../../../redux/lessons/lessons-operations";
import { useEffect } from "react";
import { selectUserLessons } from "../../../../redux/lessons/lessons-selectors";

const Lessons = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux

  // Set up calendar localization based on moment.js
  const localizer = useMemo(() => momentLocalizer(moment), []);

  const schedule = useSelector(selectUserLessons); // Get user's lessons using a selector

  useEffect(() => {
    dispatch(fetchLessons()); // Fetch user's lessons when the component mounts
  }, [dispatch]);

  const [eventModalOpen, setEventModalOpen] = useState(false); // State to manage event modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event data

  const handleEventClick = useCallback((event) => {
    setSelectedEvent(event); // Set the clicked event
    setEventModalOpen(true); // Open the event modal
  }, []);

  const handleCloseModal = useCallback(() => {
    setEventModalOpen(false); // Close the event modal
  }, []);

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
        events={schedule} // Use the user's lessons as calendar events
        startAccessor="lessonDate" // Start date property for events
        endAccessor="endTime" // End date property for events
        titleAccessor={"topic"} // Title property for events
        onSelectEvent={handleEventClick} // Click event handler for events
        formats={dateFormat}
      />

      {/* Event modal with event details */}
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

export default memo(Lessons);
