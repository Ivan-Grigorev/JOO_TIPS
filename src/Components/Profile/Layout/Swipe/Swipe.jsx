import { useState, useRef, useCallback } from "react";
import Topics from "../../EducationContent/Topics/Topics";
import Achievements from "../../../Achievements/Achivements";
import "./Swipe.scss";
import PropTypes from "prop-types";

const Swipe = ({ hideLayout, showLayout }) => {
  // State to track the active content (Topics or Achievements)
  const [activeContent, setActiveContent] = useState("topics");

  // Store the starting touch position
  const touchStartX = useRef(null);

  // Refs to access the DOM elements
  const topicsRef = useRef(null);
  const achievementsRef = useRef(null);

  // Handle the touch start event
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  // Handle the touch end event
  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX.current;

      // Switch content based on swipe direction and current active content
      if (diffX > 50 && activeContent === "topics") {
        setActiveContent("achievements");
        topicsRef.current.classList.add("hided");
        achievementsRef.current.classList.remove("hided");
        showLayout();

        // Scroll to the top of the page after swipe
        window.scrollTo(0, 0);
      } else if (diffX < -50 && activeContent === "achievements") {
        setActiveContent("topics");
        achievementsRef.current.classList.add("hided");
        topicsRef.current.classList.remove("hided");
        hideLayout();

        // Scroll to the top of the page after swipe
        window.scrollTo(0, 0);
      }
    },
    [activeContent, hideLayout, showLayout]
  );

  // Define classes based on active content for smooth transition
  const topicsClass = activeContent === "topics" ? "" : "hided";
  const achievementsClass = activeContent === "achievements" ? "" : "hided";

  return (
    <div
      className="swipe-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Display Topics content */}
      <div className={`content topics ${topicsClass}`} ref={topicsRef}>
        <Topics />
      </div>
      {/* Display Achievements content */}
      <div
        className={`content achievements ${achievementsClass}`}
        ref={achievementsRef}
      >
        <Achievements />
      </div>
    </div>
  );
};

Swipe.propTypes = {
  hideLayout: PropTypes.func.isRequired,
  showLayout: PropTypes.func.isRequired,
};

export default Swipe;
