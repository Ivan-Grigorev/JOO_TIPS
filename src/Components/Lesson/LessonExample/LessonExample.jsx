import PropTypes from "prop-types";
import "./LessonExample.scss";

import CodeHighlighter from "./CodeHighlighter/CodeHighlighter";

const LessonExample = ({ codeExample }) => {
  return (
    <div className="lesson-example__container">
      <div className="lesson-example__dots-container">
        <div className="lesson-example__dots"></div>
        <div className="lesson-example__dots"></div>
        <div className="lesson-example__dots"></div>
      </div>

      <CodeHighlighter codeExample={codeExample} />
    </div>
  );
};

export default LessonExample;

LessonExample.propTypes = {
  codeExample: PropTypes.string.isRequired,
};
