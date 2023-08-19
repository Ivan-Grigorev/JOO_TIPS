import { useSelector } from "react-redux";
import { selectLessonsTotalPoints } from "../../../../../redux/lessons/lessons-selectors";
import { selectUserActiveLanguage } from "../../../../../redux/languages/languages-selectors";

import "./LanguagePoints.scss";

const LanguagePoints = () => {
  const points = useSelector(selectLessonsTotalPoints); // Get the total lesson points using a selector
  const activeLanguage = useSelector(selectUserActiveLanguage); // Get the user's active language using a selector

  return (
    <div className="education-header__points">
      <p>{activeLanguage}</p> {/* Display the active language */}
      <p>{points}</p> {/* Display the total lesson points */}
    </div>
  );
};

export default LanguagePoints;
