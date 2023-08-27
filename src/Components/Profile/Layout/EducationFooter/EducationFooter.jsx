import { memo, useCallback, useEffect, useState } from "react";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import CompetitionIcon from "./icons/CompetitionIcon";
import { NavLink, useLocation } from "react-router-dom";
import MissedLessonsIndicator from "../EducationHeader/MissedLessonsIndicator/MissedLessonsIndicator";

// EducationFooter Component - Represents the footer section of the education page.
const EducationFooter = () => {
  // Обновляем класс shallHide при изменении isAchievementsPageOpen
  const [hideClass, setHideClass] = useState("");

  const location = useLocation();

  useEffect(() => {
    // if user on this route - hide header
    const achievementsRoute = location.pathname === "/education/achievements";

    // otherwise do nothing
    achievementsRoute ? setHideClass("hide") : setHideClass("");
  }, [location]);

  // Function to render individual buttons with corresponding icons and labels.
  // Takes in a content key (to determine the active state), the icon component, and the label.
  const renderButton = useCallback((IconComponent, label) => {
    return (
      <NavLink className="education-footer__buttons" to={label.toLowerCase()}>
        {label.toLowerCase() === "lessons" && (
          <div className="education-footer__indicator-container">
            <MissedLessonsIndicator />
          </div>
        )}
        <IconComponent /> {/* Render the provided SVG icon component */}
        {label} {/* Display the button's label */}
      </NavLink>
    );
  }, []);

  return (
    <footer className={`education-footer ${hideClass}`}>
      {/* Render the Topics, Lessons, and Results buttons */}
      {renderButton(TopicsIcon, "Topics")}
      {renderButton(LessonsIcon, "Lessons")}
      {renderButton(CompetitionIcon, "Competitions")}
      {renderButton(ResultsIcon, "Results")}
    </footer>
  );
};

export default memo(EducationFooter);
