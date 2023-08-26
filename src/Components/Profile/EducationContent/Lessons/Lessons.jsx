import EventModal from "./EventModal/EventModal";
import ChakraSpinner from "../../../ChakraUI/Spinner/Spinner";
import Calendar from "./Calendar/Calendar";

import { memo, useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLessonsLoadingStatus } from "../../../../redux/lessons/lessons-selectors";
import { finishLesson } from "../../../../redux/lessons/lessons-operations";
import {
  increasePoints,
  setMissedType,
} from "../../../../redux/lessons/lessons-slice";
import useModal from "../../../../hooks/useModal";
import useLessons from "../../../../hooks/useLessons";
import { isLastDayOfMonth, isSunday, getMissedType } from "./utils";

const Lessons = () => {
  // State to store selected event data
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch lesson data using the hook
  const lessons = useLessons();
  const dispatch = useDispatch();

  // todo пофиксить ререндер
  useEffect(() => {
    if (lessons) {
      const today = new Date();

      // Filter lessons to find missed ones
      const missed = lessons
        .filter((lesson) => {
          const lessonDate = new Date(lesson.lessonDate);
          return lessonDate < today && !lesson.completed;
        })
        .map((lesson) => lesson.lessonDate);

      // If there are no missed lessons, set missedLessons to null
      if (missed.length === 0) return dispatch(setMissedType(null)); // Exit early since there's nothing more to do

      // Determine the type of missed lessons (Daily, Weekly, Monthly)
      const type = getMissedType(missed);

      // Set the missedLessons state with the determined type
      dispatch(setMissedType(type));
    }
  }, [lessons, dispatch]);

  // Hook for managing modal state
  const { isOpen, open, close } = useModal();

  // Loading status of lessons
  const isLoading = useSelector(selectLessonsLoadingStatus);

  // Event click handler
  const handleEventClick = useCallback(
    (event) => {
      setSelectedEvent(event); // Set the clicked event
      open(event);
    },
    [open]
  );

  const handleFinishLesson = useCallback(
    (lessonId, pointsToAdd) => {
      dispatch(finishLesson({ lessonId }))
        .then((data) => {
          const success = data.meta.requestStatus === "fulfilled";
          if (success) dispatch(increasePoints(pointsToAdd));
        })
        .catch((e) => console.error(e));
      // console.log(lessonId);
    },
    [dispatch]
  );

  // Function to add 'missed', 'completed' and 'module-test' classes to lessons
  const addClass = (events) => {
    const currentDate = new Date(); // Current date and time in the local time zone

    if (events) {
      return events.map((event) => {
        const lessonCompleted = event.completed === true;
        const eventDate = new Date(event.lessonDate); // Convert event date to a Date object
        const dayOfMonth = eventDate.getDate();

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

        return { ...event, className, dayOfMonth };
      });
    }
  };

  // Apply the function to the lessons array before using it in the Calendar
  const eventsWithMissedClass = useMemo(() => addClass(lessons), [lessons]);

  return (
    <div
      className="flex"
      style={{ justifyContent: "center", paddingBottom: "75px" }}
    >
      <Calendar
        handleEventClick={handleEventClick}
        lessons={eventsWithMissedClass}
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
