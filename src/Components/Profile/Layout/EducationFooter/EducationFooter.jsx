import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useState } from "react";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import CompetitionIcon from "./icons/CompetitionIcon";

// EducationFooter Component - Represents the footer section of the education page.
const EducationFooter = ({ handleButtonClick, isAchievementsPageOpen }) => {
  // Обновляем класс shallHide при изменении isAchievementsPageOpen
  const [shallHideFooter, setShallHideFooter] = useState("");

  useEffect(() => {
    setShallHideFooter(isAchievementsPageOpen ? "hide" : "");
  }, [isAchievementsPageOpen]);

  // Function to render individual buttons with corresponding icons and labels.
  // Takes in a content key (to determine the active state), the icon component, and the label.
  const renderButton = useCallback(
    (contentKey, IconComponent, label) => {
      return (
        <button
          className="education-footer__buttons"
          onClick={() => handleButtonClick(contentKey)} // When the button is clicked, invoke the handleButtonClick function with the content key.
        >
          <IconComponent /> {/* Render the provided SVG icon component */}
          {label} {/* Display the button's label */}
        </button>
      );
    },
    [handleButtonClick]
  );

  return (
    <footer className={`education-footer ${shallHideFooter}`}>
      {/* Render the Topics, Lessons, and Results buttons */}
      {renderButton("Topics", TopicsIcon, "Topics")}
      {renderButton("Lessons", LessonsIcon, "Lessons")}
      {renderButton("Competitions", CompetitionIcon, "Competitions")}
      {renderButton("Results", ResultsIcon, "Results")}
    </footer>
  );
};

EducationFooter.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  isAchievementsPageOpen: PropTypes.bool.isRequired,
};

export default memo(EducationFooter);
