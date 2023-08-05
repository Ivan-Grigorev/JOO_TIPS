import PropTypes from "prop-types";
import "./EducationFooter.scss";
import topicsIcon from "./icons/topics-icon.svg";
import lessonsIcon from "./icons/lessons-icon.svg";
import resultsIcon from "./icons/results-icon.svg";

const EducationFooter = ({ handleButtonClick, activeContent }) => {
  const renderButton = (contentKey, icon, label) => (
    <button
      className={`education-footer__buttons ${
        activeContent === contentKey ? "active" : ""
      }`}
      onClick={() => handleButtonClick(contentKey)}
    >
      <img src={icon} alt={label} />
      {label}
    </button>
  );

  return (
    <footer className="education-footer">
      {renderButton("Topics", topicsIcon, "Topics")}
      {renderButton("Lessons", lessonsIcon, "Lessons")}
      {renderButton("Results", resultsIcon, "Results")}
    </footer>
  );
};

EducationFooter.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  activeContent: PropTypes.string.isRequired,
};

export default EducationFooter;
