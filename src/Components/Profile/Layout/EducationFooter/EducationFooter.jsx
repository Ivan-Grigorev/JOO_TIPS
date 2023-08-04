import "./EducationFooter.scss";
import topicsIcon from "./icons/topics-icon.svg";
import lessonsIcon from "./icons/lessons-icon.svg";
import resultsIcon from "./icons/results-icon.svg";

const EducationFooter = () => {
  return (
    <footer className="education-footer">
      <buttons className="education-footer__buttons">
        <img src={topicsIcon} alt="Topics" />
        Topics
      </buttons>
      <buttons className="education-footer__buttons">
        <img src={lessonsIcon} alt="Lessons" />
        Lessons
      </buttons>
      <buttons className="education-footer__buttons">
        <img src={resultsIcon} alt="Results" />
        Results
      </buttons>
    </footer>
  );
};

export default EducationFooter;
