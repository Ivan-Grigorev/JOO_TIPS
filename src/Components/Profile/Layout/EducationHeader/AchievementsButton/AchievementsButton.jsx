import { GiAchievement } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import "./AchievementsButton.scss";

const AchievementsButton = () => {
  return (
    <>
      <NavLink to={"achievements"} className="achievements-link">
        <GiAchievement />
      </NavLink>
    </>
  );
};

export default AchievementsButton;
