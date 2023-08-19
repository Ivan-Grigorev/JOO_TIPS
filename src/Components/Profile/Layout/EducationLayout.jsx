import { Suspense, lazy, useCallback, useEffect, useState } from "react"; // Import necessary modules from React
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner"; // Import a loading spinner component
import EducationFooter from "./EducationFooter/EducationFooter"; // Import the footer component
import EducationHeader from "./EducationHeader/EducationHeader"; // Import the header component
import Content from "./Content/Content";
import { Outlet } from "react-router-dom";

const SwipeIndicator = lazy(() => import("./SwipeIndicator/SwipeIndicator"));

const EducationLayout = () => {
  // Create a state variable to track active content
  const [activeEducationContent, setActiveEducationContent] =
    useState("Topics");
  const [isAchievementsPageOpen, setIsAchievementsPageOpen] = useState(false); // Create a state variable to track if achievements page is open
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // const handleButtonClick = (contentKey) => {
  //   setActiveEducationContent(contentKey); // Function to change active content when button is clicked
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };
  const handleButtonClick = useCallback(
    (contentKey) => {
      setActiveEducationContent(contentKey);
      window.scrollTo(0, 0);
    },
    [] // empty dependency array
  );

  // CSS class based on whether achievements page is open
  useEffect(() => {
    const hero = document.querySelector(".profile-hero");
    isAchievementsPageOpen
      ? hero.classList.add("achievements-hero")
      : hero.classList.remove("achievements-hero");
  }, [isAchievementsPageOpen]);

  useEffect(() => {
    const isLarge = window.matchMedia("(min-width: 1024px)").matches;
    setIsLargeScreen(isLarge);
  }, []);

  const hideLayout = useCallback(() => setIsAchievementsPageOpen(false), []); // Function to hide layout when achievements page is opened
  const showLayout = useCallback(() => setIsAchievementsPageOpen(true), []); // Function to show layout when achievements page is closed

  return (
    <>
      <EducationHeader
        handleNavClick={handleButtonClick}
        isAchievementsPageOpen={isAchievementsPageOpen}
      />
      {/* Render the header component with a prop */}
      <main className={`profile-hero education-hero `}>
        <div className="container">
          <Suspense fallback={<ChakraSpinner />}>
            {/*  Suspense for lazy loading components */}
            <Outlet />
            {/* <Content
              hideLayout={hideLayout}
              showLayout={showLayout}
              activeEducationContent={activeEducationContent}
            /> */}
          </Suspense>
        </div>
      </main>

      {!isLargeScreen && (
        <SwipeIndicator
          activeEducationContent={activeEducationContent}
          isAchievementsPageOpen={isAchievementsPageOpen}
        />
      )}

      {!isLargeScreen && (
        <EducationFooter
          handleButtonClick={handleButtonClick}
          isAchievementsPageOpen={isAchievementsPageOpen}
        />
      )}
    </>
  );
};
export default EducationLayout; // Export the EducationLayout component
