// useLessons.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserLessons } from "../redux/lessons/lessons-selectors";
import { fetchLessons } from "../redux/lessons/lessons-operations";

export default function useLessons() {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Retrieve user lessons from Redux store
  const lessons = useSelector(selectUserLessons);

  // Retrieve stored lessons from session storage
  const storedLessons = JSON.parse(sessionStorage.getItem("lessons"));

  // Check if stored lessons are not available, and if so, fetch lessons
  useEffect(() => {
    if (!storedLessons) {
      dispatch(fetchLessons());
    }
  }, [dispatch, storedLessons]);

  // Update session storage with lessons if available and not empty
  useEffect(() => {
    if (lessons && lessons.length > 0) {
      sessionStorage.setItem("lessons", JSON.stringify(lessons));
    }
  }, [lessons]);

  // Return stored lessons if available, otherwise return fetched lessons
  return storedLessons || lessons;
}
