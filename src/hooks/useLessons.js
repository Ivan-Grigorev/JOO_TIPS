// useLessons.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserLessons } from "../redux/lessons/lessons-selectors";
import { fetchLessons } from "../redux/lessons/lessons-operations";

export default function useLessons() {
  const dispatch = useDispatch();
  const lessons = useSelector(selectUserLessons);

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  return lessons;
}
