import EventModal from "./EventModal/EventModal";
import ChakraSpinner from "../../../ChakraUI/Spinner/Spinner";
import Calendar from "./Calendar/Calendar";

import { memo, useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLessonsLoadingStatus,
  selectMissedLessonsType,
} from "../../../../redux/lessons/lessons-selectors";
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

  const missedLessons = useSelector(selectMissedLessonsType);

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

      if (missed.length === 0) {
        return dispatch(
          setMissedType({ daily: null, weekly: null, monthly: null })
        );
      }

      // Determine the type of missed lessons (Daily, Weekly, Monthly)
      const type = getMissedType(missed);

      // Update the missedType state only if it has changed
      if (
        type.daily !== missedLessons.daily ||
        type.weekly !== missedLessons.weekly ||
        type.monthly !== missedLessons.monthly
      ) {
        dispatch(setMissedType(type));
      }
    }
    console.log(missedLessons);
  }, [lessons, missedLessons, dispatch]);

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
