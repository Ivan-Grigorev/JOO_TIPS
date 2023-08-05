import PropTypes from "prop-types";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";

const EducationFooter = ({ handleButtonClick, activeContent }) => {
  const renderButton = (contentKey, IconComponent, label) => (
    <button
      className={`education-footer__buttons ${
        activeContent === contentKey ? "active" : ""
      }`}
      onClick={() => handleButtonClick(contentKey)}
    >
      <IconComponent />
      {label}
    </button>
  );

  return (
    <footer className="education-footer">
      {renderButton("Topics", TopicsIcon, "Topics")}
      {renderButton("Lessons", LessonsIcon, "Lessons")}
      {renderButton("Results", ResultsIcon, "Results")}
    </footer>
  );
};

EducationFooter.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  activeContent: PropTypes.string.isRequired,
};

export default EducationFooter;
