import PropTypes from "prop-types";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import CompetitionIcon from "./icons/CompetitionIcon";
// EducationFooter Component - Represents the footer section of the education page.
const EducationFooter = ({ handleButtonClick, activeContent }) => {
  // Function to render individual buttons with corresponding icons and labels.
  // Takes in a content key (to determine the active state), the icon component, and the label.
  const renderButton = (contentKey, IconComponent, label) => (
    <button
      // Add the 'active' class if the current content matches the contentKey, otherwise, no class is added.
      className={`education-footer__buttons ${
        activeContent === contentKey ? "active" : ""
      }`}
      // When the button is clicked, invoke the handleButtonClick function with the content key.
      onClick={() => handleButtonClick(contentKey)}
    >
      <IconComponent /> {/* Render the provided SVG icon component */}
      {label} {/* Display the button's label */}
    </button>
  );

  return (
    <footer className="education-footer">
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
  activeContent: PropTypes.string.isRequired,
};

export default EducationFooter;
