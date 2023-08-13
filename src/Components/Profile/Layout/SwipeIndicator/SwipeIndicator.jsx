import "./SwipeIndicator.scss"; // Import the styles for the SwipeIndicator component

// SwipeIndicator component to show indicators based on active education content and achievements page status
const SwipeIndicator = ({ activeEducationContent, isAchievementsPageOpen }) => {
  const shallHide = activeEducationContent === "Topics" ? "" : "hided"; // Conditionally determine if the indicator should be hidden

  // Determine classes to highlight active content based on the current state
  const topicsContent =
    activeEducationContent === "Topics" && isAchievementsPageOpen === false
      ? "active"
      : "";

  const achievementsContent = isAchievementsPageOpen === true ? "active" : "";

  return (
    <>
      {/* Container for swipe indicators */}
      <div className={`swipe-indicator ${shallHide}`}>
        {/* Indicator for achievements content */}
        <div className={achievementsContent}></div>
        {/* Indicator for topics content */}
        <div className={topicsContent}></div>
      </div>
    </>
  );
};

export default SwipeIndicator; // Export the SwipeIndicator component
