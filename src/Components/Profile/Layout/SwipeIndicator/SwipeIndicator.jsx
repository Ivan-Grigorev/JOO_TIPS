import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./SwipeIndicator.scss"; // Import the styles for the SwipeIndicator component

// SwipeIndicator component to show indicators based on active education content and achievements page status
const SwipeIndicator = () => {
  const [shouldHide, setShouldHide] = useState("");
  const [demontageClass, setDemontageClass] = useState("");
  const [onAchievementsClass, setOnAchievementsClass] = useState("");

  const topicsRef = useRef(null); // ref to topics link (used in useEffect)

  const location = useLocation();

  useEffect(() => {
    // if user is not on this routes - hide indicator
    const swipeRoutes =
      location.pathname === "/education/achievements" ||
      location.pathname === "/education/topics";

    !swipeRoutes ? setShouldHide("hided") : setShouldHide("");
  }, [shouldHide, location]);

  useEffect(() => {
    const achievementsRoute = location.pathname === "/education/achievements";

    achievementsRoute
      ? setOnAchievementsClass("achievements")
      : setOnAchievementsClass("");
  }, [shouldHide, location]);

  useEffect(() => {
    shouldHide === "hided"
      ? setDemontageClass("active") // leave active class on topics link, when indicator is about to hide
      : setDemontageClass(""); // default mode
  }, [shouldHide]);

  if (location.pathname.startsWith("/education/lessons/")) return null;

  return (
    <>
      {/* Container for swipe indicators */}
      <div className={`swipe-indicator ${shouldHide} ${onAchievementsClass}`}>
        {/* Indicator for achievements content */}
        <NavLink to="achievements"></NavLink>
        {/* Indicator for topics content */}
        <NavLink
          to="topics"
          ref={topicsRef}
          className={demontageClass}
        ></NavLink>
      </div>
    </>
  );
};

export default SwipeIndicator; // Export the SwipeIndicator component
