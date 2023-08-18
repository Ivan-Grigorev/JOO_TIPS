import PropTypes from "prop-types";

import Competition from "../../EducationContent/Competition/Competition";
import Lessons from "../../EducationContent/Lessons/Lessons";
import Results from "../../EducationContent/Results/Results";
import Swipe from "../Swipe/Swipe";

const Content = ({ hideLayout, showLayout, activeEducationContent }) => {
  return (
    <>
      {activeEducationContent === "Topics" && (
        <Swipe hideLayout={hideLayout} showLayout={showLayout} /> // Render Swipe component if active content is "Topics"
      )}
      {activeEducationContent === "Lessons" && <Lessons />}
      {/* Lessons component if active content is "Lessons" */}
      {activeEducationContent === "Competitions" && <Competition />}
      {/* Render Competition component if active content is "Competitions" */}
      {activeEducationContent === "Results" && <Results />}
      {/* Results component if active content is "Results" */}
    </>
  );
};

Content.propTypes = {
  hideLayout: PropTypes.func.isRequired,
  showLayout: PropTypes.func.isRequired,
  activeEducationContent: PropTypes.bool.isRequired,
};

export default Content;
