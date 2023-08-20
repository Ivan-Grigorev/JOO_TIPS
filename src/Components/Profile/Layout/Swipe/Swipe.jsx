import { useState, useRef, useCallback, useEffect } from "react";
import Topics from "../../EducationContent/Topics/Topics";
import Achievements from "../../EducationContent/Achievements/Achivements";
import "./Swipe.scss";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const Swipe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // State to track the active content (Topics or Achievements)
  const [activeContent, setActiveContent] = useState("topics");

  const touchStartX = useRef(null); // Store the starting touch position
  const topicsRef = useRef(null); // Refs to access the DOM elements
  const achievementsRef = useRef(null); // Refs to access the DOM elements

  useEffect(() => {
    if (location.pathname === "/education/achievements") {
      setActiveContent("achievements");
    } else if (location.pathname === "/education/topics") {
      setActiveContent("topics");
      achievementsRef.current.classList.add("hided");
      topicsRef.current.classList.remove("hided");
    }
  }, [location]);

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
        // showLayout();
        navigate("/education/achievements");

        // Scroll to the top of the page after swipe
        window.scrollTo(0, 0);
      } else if (diffX < -50 && activeContent === "achievements") {
        setActiveContent("topics");
        achievementsRef.current.classList.add("hided");
        topicsRef.current.classList.remove("hided");
        // hideLayout();

        // Обновляем путь при переключении на Topics
        navigate("/education/topics");

        // Scroll to the top of the page after swipe
        window.scrollTo(0, 0);
      }
    },
    [activeContent, navigate]
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
      <Topics topicsClass={topicsClass} topicsRef={topicsRef} />

      <Achievements
        achievementsClass={achievementsClass}
        achievementsRef={achievementsRef}
      />
    </div>
  );
};

Swipe.propTypes = {
  hideLayout: PropTypes.func,
  showLayout: PropTypes.func,
};

export default Swipe;
