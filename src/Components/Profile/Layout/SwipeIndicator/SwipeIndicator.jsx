import PropTypes from "prop-types";
import "./SwipeIndicator.scss"; // Import the styles for the SwipeIndicator component

// SwipeIndicator component to show indicators based on active education content and achievements page status
const SwipeIndicator = ({ activeEducationContent, isAchievementsPageOpen }) => {
  const shallHide = activeEducationContent === "Topics" ? "" : "hided"; // Conditionally determine if the indicator should be hidden

  // Determine classes to highlight active content based on the current state
  const topicsContent =
    activeEducationContent !== "Achievements" &&
    isAchievementsPageOpen === false
      ? "active"
      : "";

  const achievementsContent = isAchievementsPageOpen === true ? "active" : "";

  const achievementsHasVisited =
    isAchievementsPageOpen === true ? "achievements" : "";

  return (
    <>
      {/* Container for swipe indicators */}
      <div className={`swipe-indicator ${shallHide} ${achievementsHasVisited}`}>
        {/* Indicator for achievements content */}
        <div className={achievementsContent}></div>
        {/* Indicator for topics content */}
        <div className={topicsContent}></div>
      </div>
    </>
  );
};

SwipeIndicator.propTypes = {
  activeEducationContent: PropTypes.string.isRequired,
  isAchievementsPageOpen: PropTypes.bool.isRequired,
};

export default SwipeIndicator; // Export the SwipeIndicator component
