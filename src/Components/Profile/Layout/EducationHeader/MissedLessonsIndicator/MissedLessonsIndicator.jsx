import { useSelector } from "react-redux";
import { selectMissedLessonsType } from "../../../../../redux/lessons/lessons-selectors";
import "./MissedLessonsIndicator.scss";
import { memo } from "react";

const MissedLessonsIndicator = () => {
  const missedLessons = useSelector(selectMissedLessonsType);

  return (
    <div className="missed-indicator__container">
      {missedLessons.daily && <div className="missed-indicator daily"></div>}
      {missedLessons.weekly && <div className="missed-indicator weekly"></div>}
      {missedLessons.monthly && (
        <div className="missed-indicator monthly"></div>
      )}
    </div>
  );
};

export default memo(MissedLessonsIndicator);
