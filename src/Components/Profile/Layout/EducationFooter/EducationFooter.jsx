import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useState } from "react";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import CompetitionIcon from "./icons/CompetitionIcon";
import { NavLink } from "react-router-dom";

// EducationFooter Component - Represents the footer section of the education page.
const EducationFooter = ({ isAchievementsPageOpen }) => {
  // Обновляем класс shallHide при изменении isAchievementsPageOpen
  const [shallHideFooter, setShallHideFooter] = useState("");

  useEffect(() => {
    setShallHideFooter(isAchievementsPageOpen ? "hide" : "");
  }, [isAchievementsPageOpen]);

  // Function to render individual buttons with corresponding icons and labels.
  // Takes in a content key (to determine the active state), the icon component, and the label.
  const renderButton = useCallback((IconComponent, label, to) => {
    return (
      <NavLink className="education-footer__buttons" to={label.toLowerCase()}>
        <IconComponent /> {/* Render the provided SVG icon component */}
        {label} {/* Display the button's label */}
      </NavLink>
    );
  }, []);

  return (
    <footer className={`education-footer ${shallHideFooter}`}>
      {/* Render the Topics, Lessons, and Results buttons */}
      {renderButton(TopicsIcon, "Topics")}
      {renderButton(LessonsIcon, "Lessons")}
      {renderButton(CompetitionIcon, "Competitions")}
      {renderButton(ResultsIcon, "Results")}
    </footer>
  );
};

EducationFooter.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  isAchievementsPageOpen: PropTypes.bool.isRequired,
};

export default memo(EducationFooter);
