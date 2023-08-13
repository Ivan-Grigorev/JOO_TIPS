import { useState, useEffect, useRef } from "react";
import Topics from "../../EducationContent/Topics/Topics";
import Achievements from "../../../Achievements/Achivements";
import "./Swipe.scss";

const Swipe = () => {
  const [activeContent, setActiveContent] = useState("topics");
  const touchStartX = useRef(null);

  const topicsRef = useRef(null);
  const achievementsRef = useRef(null);

  //   useEffect(() => {
  //     if (topicsRef.current.classList.contains("inactive")) {
  //       setTimeout(() => topicsRef.current.classList.add("hided"), 1000);
  //     }
  //   }, [activeContent]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    if (diffX > 50 && activeContent === "topics") {
      setActiveContent("achievements");
      topicsRef.current.classList.add("hided");
      achievementsRef.current.classList.remove("hided");
    } else if (diffX < -50 && activeContent === "achievements") {
      setActiveContent("topics");
      if (activeContent === "topics") {
        achievementsRef.current.classList.add("hided");
        topicsRef.current.classList.remove("hided");
      }
    }
  };

  const topicsClass = activeContent === "topics" ? "" : "hided";
  const achievementsClass = activeContent === "achievements" ? "" : "hided";

  return (
    <div
      className="swipe-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`content topics ${topicsClass}`} ref={topicsRef}>
        <Topics />
      </div>
      <div
        className={`content achievements ${achievementsClass} `}
        ref={achievementsRef}
      >
        <Achievements />
      </div>
    </div>
  );
};

export default Swipe;
