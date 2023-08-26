import "./EducationHeader.scss"; // Import the styles for EducationHeader
import { memo, useEffect, useMemo, useRef, useState } from "react"; // Import the useEffect hook from React
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query"; // Import a media query
import { useSelector } from "react-redux"; // Import the useDispatch and useSelector functions from react-redux
import { selectIsLoggedIn } from "../../../../redux/auth/auth-selectors"; // Import a selector to check if the user is logged in

import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink"; // Import the logo link component
import Avatar from "../Header/Avatar/Avatar"; // Import the avatar component
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./Menu/Menu";
import AchievementsButton from "./AchievementsButton/AchievementsButton";
import LanguagePoints from "./LanguagePoints/LanguagePoints";
import { selectMissedLessonsType } from "../../../../redux/lessons/lessons-selectors";

const EducationHeader = () => {
  const linkRef = useRef(null);
  const [hideClass, setHideClass] = useState(""); // Define an array of content keys and their corresponding labels
  const contentItems = useMemo(() => {
    return [
      { key: "Topics", label: "Topics", to: "/education/topics" },
      {
        key: "Lessons",
        label: "Lessons",
        to: "/education/lessons",
        ref: linkRef,
      },
      {
        key: "Competitions",
        label: "Competitions",
        to: "/education/competitions",
      },
      { key: "Results", label: "Results", to: "/education/results" },
    ];
  }, []);

  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn); // Get the user's login status using a selector
  const missedLessonsType = useSelector(selectMissedLessonsType);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const achievementsRoute = location.pathname === "/education/achievements";
    setHideClass(achievementsRoute ? "hide" : "");
  }, [isLoggedIn, location]);

  useEffect(() => {
    switch (missedLessonsType) {
      case "Daily":
        linkRef.current.classList.add("daily-missed");
        return;

      case "Weekly":
        linkRef.current.classList.add("weekly-missed");
        return;

      case "Monthly":
        linkRef.current.classList.add("monthly-missed");
        return;

      default:
        return;
    }
  });

  return (
    <header className={`education-header ${hideClass}`}>
      <div className="container">
        <div className="education-header__top">
          <BurgerMenu />
          {isLargeScreen && <Navigation contentItems={contentItems} />}
          {!isLargeScreen && <LogoLink width="80px" height="30px" />}
          <Avatar w="50px" h="50px" />
        </div>
        <LanguagePoints />

        {isLargeScreen && <AchievementsButton />}
      </div>
    </header>
  );
};

export default memo(EducationHeader); // Export the EducationHeader component
