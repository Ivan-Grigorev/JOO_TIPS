import { memo, useCallback, useEffect, useState, lazy, Suspense } from "react";
import "./EducationFooter.scss";

import LessonsIcon from "./icons/LessonsIcon";
import TopicsIcon from "./icons/TopicsIcon";
import ResultsIcon from "./icons/ResultsIcon";
import CompetitionIcon from "./icons/CompetitionIcon";
import { NavLink, useLocation } from "react-router-dom";
import MissedLessonsIndicator from "../EducationHeader/MissedLessonsIndicator/MissedLessonsIndicator";
import ChakraSpinner from "../../../ChakraUI/Spinner/Spinner";

const LessonFooter = lazy(() => import("../LessonFooter/LessonFooter"));

// EducationFooter Component - Represents the footer section of the education page.
const EducationFooter = () => {
  // Обновляем класс shallHide при изменении isAchievementsPageOpen
  const [hideClass, setHideClass] = useState("");
  const [className, setClassName] = useState("");

  const location = useLocation();

  const showLessonFooter = location.pathname.startsWith("/education/lessons/");

  useEffect(() => {
    // if user on this route - hide header
    const shouldHide = location.pathname === "/education/achievements";
    const onLessonRoute = location.pathname.startsWith("/education/lessons/");

    // otherwise do nothing
    shouldHide ? setHideClass("hide") : setHideClass("");
    onLessonRoute
      ? setClassName("lesson__footer")
      : setClassName("education-footer");
  }, [location]);

  // Function to render individual buttons with corresponding icons and labels.
  // Takes in a content key (to determine the active state), the icon component, and the label.
  const renderButton = useCallback((IconComponent, label) => {
    return (
      <NavLink className="education-footer__buttons" to={label.toLowerCase()}>
        {label.toLowerCase() === "lessons" && (
          <div className="education-footer__indicator-container">
            <MissedLessonsIndicator />
          </div>
        )}
        <IconComponent /> {/* Render the provided SVG icon component */}
        {label} {/* Display the button's label */}
      </NavLink>
    );
  }, []);

  return (
    <footer className={`${className} ${hideClass} `}>
      {showLessonFooter ? (
        <Suspense fallback={<ChakraSpinner />}>
          <LessonFooter />
        </Suspense>
      ) : (
        <>
          {/* Render the Topics, Lessons, and Results buttons */}
          {renderButton(TopicsIcon, "Topics")}
          {renderButton(LessonsIcon, "Lessons")}
          {renderButton(CompetitionIcon, "Competitions")}
          {renderButton(ResultsIcon, "Results")}
        </>
      )}
    </footer>
  );
};

export default memo(EducationFooter);
