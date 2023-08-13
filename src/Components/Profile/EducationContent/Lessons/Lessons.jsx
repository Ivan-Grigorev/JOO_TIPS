// import "./Lessons-calendar.scss";
import "./big-calendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CalendarCustomToolbar";
import { useState } from "react";
import EventModal from "./EventModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../../../redux/lessons/lessons-operations";
import { useEffect } from "react";
import { selectUserLessons } from "../../../../redux/lessons/lessons-selectors";

// Set up calendar localization based on moment.js
const localizer = momentLocalizer(moment);

const Lessons = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux
  // Example schedule data for demonstration
  const exampleSchedule = [
    {
      topic: "Fundamentals of React",
      subtopic: "Introduction to React",
      flashcardsCount: 3,
      lessonDate: new Date(2023, 7, 9, 10, 0), // required
      endTime: new Date(2023, 7, 9, 10, 45), // required
      lessonNumber: 3,
      lessonDuration: 45,
    },
    {
      topic: "Fundamentals of Express",
      subtopic: "Routing in Express",
      flashcardsCount: 6,
      lessonDate: new Date(2023, 7, 10, 14, 0),
      endTime: new Date(2023, 7, 10, 16, 0),
      lessonNumber: 4,
      lessonDuration: 45,
    },
    {
      topic: "React Hooks",
      subtopic: "useState and useEffect",
      flashcardsCount: 4,
      lessonDate: new Date(2023, 7, 11, 9, 0),
      endTime: new Date(2023, 7, 11, 10, 30),
      lessonNumber: 1,
      lessonDuration: 45,
    },
    {
      topic: "React Hooks",
      subtopic: "useContext and useReducer",
      flashcardsCount: 5,
      lessonDate: new Date(2023, 7, 12, 13, 0),
      endTime: new Date(2023, 7, 12, 15, 0),
      lessonNumber: 2,
      lessonDuration: 45,
    },
  ];

  const schedule = useSelector(selectUserLessons); // Get user's lessons using a selector

  useEffect(() => {
    dispatch(fetchLessons()); // Fetch user's lessons when the component mounts
  }, [dispatch]);

  const [eventModalOpen, setEventModalOpen] = useState(false); // State to manage event modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event data

  const handleEventClick = (event) => {
    setSelectedEvent(event); // Set the clicked event
    setEventModalOpen(true); // Open the event modal
  };

  const handleCloseModal = () => {
    setEventModalOpen(false); // Close the event modal
  };

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
        formats={{
          dateFormat: "D", // Customize how day numbers are displayed
        }}
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

export default Lessons;
