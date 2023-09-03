import PropTypes from "prop-types";
import "./LessonExample.scss";

const LessonExample = ({ text }) => {
  return (
    <div className="lesson-example__container">
      <div className="lesson-example__dots-container">
        <div className="lesson-example__dots"></div>
        <div className="lesson-example__dots"></div>
        <div className="lesson-example__dots"></div>
      </div>

      <p className="lesson-example__content">{text}</p>
    </div>
  );
};

export default LessonExample;

LessonExample.propTypes = {
  text: PropTypes.string.isRequired,
};
