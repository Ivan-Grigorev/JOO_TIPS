import "./SwipeIndicator.scss";

const SwipeIndicator = ({ activeEducationContent, isAchievementsPageOpen }) => {
  const shallHide = activeEducationContent === "Topics" ? "" : "hided";

  const topicsContent =
    activeEducationContent === "Topics" && isAchievementsPageOpen === false
      ? "active"
      : "";

  const achievementsContent = isAchievementsPageOpen === true ? "active" : "";

  return (
    <>
      <div className={`swipe-indicator ${shallHide}`}>
        <div className={achievementsContent}></div>
        <div className={topicsContent}></div>
      </div>
    </>
  );
};

export default SwipeIndicator;
