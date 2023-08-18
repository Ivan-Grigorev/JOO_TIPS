import PropTypes from "prop-types";
import { lazy } from "react";

const Lessons = lazy(() => import("../../EducationContent/Lessons/Lessons")); // Lazy import the lessons component
const Competition = lazy(() =>
  import("../../EducationContent/Competition/Competition")
); // Lazy import the competition component
const Results = lazy(() => import("../../EducationContent/Results/Results")); // Lazy import the results component
const Swipe = lazy(() => import("../Swipe/Swipe")); // Import the swipe component

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
  activeEducationContent: PropTypes.string.isRequired,
};

export default Content;
