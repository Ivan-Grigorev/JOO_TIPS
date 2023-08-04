import "./EducationFooter.scss";
import topicsIcon from "./icons/topics-icon.svg";
import lessonsIcon from "./icons/lessons-icon.svg";
import resultsIcon from "./icons/results-icon.svg";

const EducationFooter = ({ handleButtonClick }) => {
  return (
    <footer className="education-footer">
      <button
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Topics")}
      >
        <img src={topicsIcon} alt="Topics" />
        Topics
      </button>
      <button
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Lessons")}
      >
        <img src={lessonsIcon} alt="Lessons" />
        Lessons
      </button>
      <button
        className="education-footer__buttons"
        onClick={() => handleButtonClick("Results")}
      >
        <img src={resultsIcon} alt="Results" />
        Results
      </button>
    </footer>
  );
};

export default EducationFooter;
