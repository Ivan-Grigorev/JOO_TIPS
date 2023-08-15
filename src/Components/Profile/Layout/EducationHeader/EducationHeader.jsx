import { useEffect, useState } from "react"; // Import the useEffect hook from React
import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink"; // Import the logo link component
import Avatar from "../Header/Avatar/Avatar"; // Import the avatar component

import "./EducationHeader.scss"; // Import the styles for EducationHeader
import { useDispatch, useSelector } from "react-redux"; // Import the useDispatch and useSelector functions from react-redux
import { fetchLessonsPointsTotalSum } from "../../../../redux/lessons/lessons-operations"; // Import a function to fetch total lesson points
import { selectLessonsTotalPoints } from "../../../../redux/lessons/lessons-selectors"; // Import a selector to get total lesson points
import { selectUserActiveLanguage } from "../../../../redux/languages/languages-selectors"; // Import a selector to get the user's active language
import { selectIsLoggedIn } from "../../../../redux/auth/auth-selectors"; // Import a selector to check if the user is logged in
import { fetchlanguages } from "../../../../redux/languages/languages-operations"; // Import a function to fetch languages

import { slide as Menu } from "react-burger-menu";
import "./Burger-menu.scss";
import { Link } from "react-router-dom";

const EducationHeader = ({ isAchievementsPageOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux

  const isLoggedIn = useSelector(selectIsLoggedIn); // Get the user's login status using a selector
  const points = useSelector(selectLessonsTotalPoints); // Get the total lesson points using a selector
  const activeLanguage = useSelector(selectUserActiveLanguage); // Get the user's active language using a selector

  useEffect(() => {
    if (isLoggedIn) {
      // If the user is logged in, perform these actions
      dispatch(fetchLessonsPointsTotalSum()); // Fetch the total sum of lesson points
      dispatch(fetchlanguages()); // Fetch languages
    }
  }, [dispatch, isLoggedIn]); // Run the effect when dispatch or isLoggedIn change

  useEffect(() => {
    // Select the burger menu button element
    const burgerMenu = document.querySelector(".bm-burger-button");

    // Define a function to add "hide" class
    const setClass = () => burgerMenu.classList.add("hide");

    // Define a function to remove "hide" class
    const resetClass = () => burgerMenu.classList.remove("hide");

    // Check if the achievements page is open
    // If true, add "hide" class; otherwise, remove it
    isAchievementsPageOpen ? setClass() : resetClass();
  }, [isAchievementsPageOpen]); // The effect will re-run whenever isAchievementsPageOpen changes

  // Define a function to handle the state change of the menu
  const handleStateChange = (state) => {
    // Find the <body> element in the document
    const body = document.body;

    // Determine whether the menu is open
    const isMenuOpen = state.isOpen;

    // Add or remove the "height-limit" class based on the menu's state
    body.classList.toggle("height-limit", isMenuOpen);

    // Update the state variable to reflect the menu's open/closed state
    setIsMenuOpen(isMenuOpen);
  };

  const shallHide = isAchievementsPageOpen === true ? "hide" : ""; // Determine if the header should be hidden on the achievements page

  const renderItems = () => {
    const output = [];

    for (let index = 0; index < 15; index++) {
      output.push(
        <Link to={"#"} key={index}>
          Option {index + 1}
        </Link>
      );
    }
    return output;
  };

  return (
    <>
      <header className={`education-header ${shallHide}`}>
        <div className="education-header__top">
          <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
            <LogoLink width={100} />
            {/* Content of the burger menu */}
            {/* {renderItems()} */}
            <Link href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Cabinet</Link>
            <Link href="#">About</Link>
            <Link href="#">Articles</Link>
            <Link href="#">Contact</Link>
          </Menu>
          <LogoLink width="80px" height="30px" /> {/* Display the logo link */}
          <Avatar w="50px" h="50px" /> {/* Display the avatar */}
        </div>

        <div className="education-header__points">
          <p>{activeLanguage}</p> {/* Display the active language */}
          <p>{points}</p> {/* Display the total lesson points */}
        </div>
      </header>
    </>
  );
};

export default EducationHeader; // Export the EducationHeader component
