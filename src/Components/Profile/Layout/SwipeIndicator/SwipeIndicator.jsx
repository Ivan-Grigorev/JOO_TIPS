import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./SwipeIndicator.scss"; // Import the styles for the SwipeIndicator component

// SwipeIndicator component to show indicators based on active education content and achievements page status
const SwipeIndicator = () => {
  const [shouldHide, setShouldHide] = useState("");
  const [demontageClass, setDemontageClass] = useState("");

  const topicsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const swipeRoutes =
      location.pathname === "/education/achievements" ||
      location.pathname === "/education/topics";

    !swipeRoutes ? setShouldHide("hided") : setShouldHide("");
  }, [shouldHide, location]);

  useEffect(() => {
    shouldHide === "hided"
      ? setDemontageClass("active")
      : setDemontageClass("");
  }, [shouldHide]);

  // Conditionally determine if the indicator should be hidden

  return (
    <>
      {/* Container for swipe indicators */}
      <div className={`swipe-indicator ${shouldHide}`}>
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
