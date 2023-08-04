import "./EducationFooter.scss";
import topicsIcon from "./icons/topics-icon.svg";
import lessonsIcon from "./icons/lessons-icon.svg";
import resultsIcon from "./icons/results-icon.svg";

const EducationFooter = ({ handleButtonClick }) => {
  return (
    <footer className="education-footer">
      <buttons
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Topics")}
      >
        <img src={topicsIcon} alt="Topics" />
        Topics
      </buttons>
      <buttons
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Lessons")}
      >
        <img src={lessonsIcon} alt="Lessons" />
        Lessons
      </buttons>
      <buttons
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Results")}
      >
        <img src={resultsIcon} alt="Results" />
        Results
      </buttons>
    </footer>
  );
};

export default EducationFooter;
