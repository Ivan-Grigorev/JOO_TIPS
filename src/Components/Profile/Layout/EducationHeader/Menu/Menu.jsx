import { useCallback, useState } from "react";
import { slide as Menu } from "react-burger-menu";

import TopicsIcon from "../../EducationFooter/icons/TopicsIcon";
import LessonsIcon from "../../EducationFooter/icons/LessonsIcon";
import CompetitionIcon from "../../EducationFooter/icons/CompetitionIcon";
import ResultsIcon from "../../EducationFooter/icons/ResultsIcon";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Menu
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
      customCrossIcon={false}
    >
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
  );
};

export default BurgerMenu;
