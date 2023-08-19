import "./EducationHeader.scss"; // Import the styles for EducationHeader
import PropTypes from "prop-types";
import { memo, useCallback, useEffect, useMemo, useState } from "react"; // Import the useEffect hook from React
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query"; // Import a media query
import { useDispatch, useSelector } from "react-redux"; // Import the useDispatch and useSelector functions from react-redux
import { fetchLessonsPointsTotalSum } from "../../../../redux/lessons/lessons-operations"; // Import a function to fetch total lesson points
import { selectLessonsTotalPoints } from "../../../../redux/lessons/lessons-selectors"; // Import a selector to get total lesson points
import { selectUserActiveLanguage } from "../../../../redux/languages/languages-selectors"; // Import a selector to get the user's active language
import { selectIsLoggedIn } from "../../../../redux/auth/auth-selectors"; // Import a selector to check if the user is logged in
import { fetchlanguages } from "../../../../redux/languages/languages-operations"; // Import a function to fetch languages

import "./Burger-menu.scss";

import { slide as Menu } from "react-burger-menu";
import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink"; // Import the logo link component
import Avatar from "../Header/Avatar/Avatar"; // Import the avatar component
import TopicsIcon from "../EducationFooter/icons/TopicsIcon";
import LessonsIcon from "../EducationFooter/icons/LessonsIcon";
import CompetitionIcon from "../EducationFooter/icons/CompetitionIcon";
import ResultsIcon from "../EducationFooter/icons/ResultsIcon";
import { ImCross } from "react-icons/im";

const EducationHeader = ({ isAchievementsPageOpen }) => {
  const [hideClass, setHideClass] = useState(""); // Define an array of content keys and their corresponding labels
  const contentItems = useMemo(() => {
    return [
      { key: "Topics", label: "Topics", to: "/education/topics" },
      { key: "Lessons", label: "Lessons", to: "/education/lessons" },
      {
        key: "Competitions",
        label: "Competitions",
        to: "/education/competitions",
      },
      { key: "Results", label: "Results", to: "/education/results" },
    ];
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn); // Get the user's login status using a selector
  const points = useSelector(selectLessonsTotalPoints); // Get the total lesson points using a selector
  const activeLanguage = useSelector(selectUserActiveLanguage); // Get the user's active language using a selector

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isLoggedIn) {
      // If the user is logged in, perform these actions
      dispatch(fetchLessonsPointsTotalSum()); // Fetch the total sum of lesson points
      dispatch(fetchlanguages()); // Fetch languages
    }
  }, [dispatch, isLoggedIn]); // Run the effect when dispatch or isLoggedIn change

  useEffect(() => {
    // if user is not on this routes - hide indicator
    const achievementsRoute = location.pathname === "/education/achievements";

    achievementsRoute ? setHideClass("hide") : setHideClass("");
  }, [location]);

  // Define a function to handle the state change of the menu
  const handleStateChange = useCallback((state) => {
    // Find the <body> element in the document
    const body = document.body;

    // Determine whether the menu is open
    const isMenuOpen = state.isOpen;

    // Add or remove the "height-limit" class based on the menu's state
    body.classList.toggle("height-limit", isMenuOpen);

    // Update the state variable to reflect the menu's open/closed state
    setIsMenuOpen(isMenuOpen);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`education-header ${hideClass}`}>
      <div className="container">
        <div className="education-header__top">
          <Menu
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            customCrossIcon={false}
          >
            {/* Content of the burger menu */}
            {/* {renderItems()} */}
            <div className="close-button" onClick={toggleMenu}>
              <ImCross />
            </div>
            <Link to={"#"}>
              <TopicsIcon />
              Topics
            </Link>
            <Link to={"#"}>
              <LessonsIcon />
              Lessons
            </Link>
            <Link to={"#"}>
              <CompetitionIcon />
              Competitions
            </Link>
            <Link to={"#"}>
              <ResultsIcon />
              Results
            </Link>
          </Menu>
          {isLargeScreen && (
            <>
              <nav className="education-navigation">
                {contentItems.map((item) => (
                  <NavLink key={item.key} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <LogoLink width="80px" height="30px" />
            </>
          )}
          {!isLargeScreen && <LogoLink width="80px" height="30px" />}
          <Avatar w="50px" h="50px" /> {/* Display the avatar */}
        </div>

        <div className="education-header__points">
          <p>{activeLanguage}</p> {/* Display the active language */}
          <p>{points}</p> {/* Display the total lesson points */}
        </div>
      </div>
    </header>
  );
};

EducationHeader.propTypes = {
  isAchievementsPageOpen: PropTypes.bool.isRequired,
};

export default memo(EducationHeader); // Export the EducationHeader component
