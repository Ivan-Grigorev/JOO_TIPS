import { useSelector } from "react-redux";
import { selectMissedLessonsType } from "../../../../../redux/lessons/lessons-selectors";
import "./MissedLessonsIndicator.scss";

const MissedLessonsIndicator = () => {
  const missedLessons = useSelector(selectMissedLessonsType);
  return (
    <>
      {missedLessons.daily && <div className="missed-indicator daily"></div>}
      {missedLessons.weekly && <div className="missed-indicator weekly"></div>}
      {missedLessons.monthly && (
        <div className="missed-indicator monthly"></div>
      )}
    </>
  );
};

export default MissedLessonsIndicator;
