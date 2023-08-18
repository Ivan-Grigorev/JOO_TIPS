import { Suspense, lazy, useState } from "react"; // Import necessary modules from React
import { useMediaQuery } from "@react-hook/media-query"; // Import a media query
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner"; // Import a loading spinner component
import EducationFooter from "./EducationFooter/EducationFooter"; // Import the footer component
import EducationHeader from "./EducationHeader/EducationHeader"; // Import the header component
import Content from "./Content/Content";

const SwipeIndicator = lazy(() => import("./SwipeIndicator/SwipeIndicator"));

const EducationLayout = () => {
  // Create a state variable to track active content
  const [activeEducationContent, setActiveEducationContent] = useState("Topics"); // prettier-ignore
  const [isAchievementsPageOpen, setIsAchievementsPageOpen] = useState(false); // Create a state variable to track if achievements page is open
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const handleButtonClick = (contentKey) => {
    setActiveEducationContent(contentKey); // Function to change active content when button is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const hideLayout = () => setIsAchievementsPageOpen(false); // Function to hide layout when achievements page is opened
  const showLayout = () => setIsAchievementsPageOpen(true); // Function to show layout when achievements page is closed

  // CSS class based on whether achievements page is open
  const achievementsHeroClass = isAchievementsPageOpen === true ? "achievements-hero" : ""; // prettier-ignore

  return (
    <>
      <EducationHeader
        handleNavClick={handleButtonClick}
        isAchievementsPageOpen={isAchievementsPageOpen}
      />
      {/* Render the header component with a prop */}
      <main className={`profile-hero education-hero ${achievementsHeroClass}`}>
        <div className="container">
          <Suspense fallback={<ChakraSpinner />}>
            {/*  Suspense for lazy loading components */}
            <Content
              hideLayout={hideLayout}
              showLayout={showLayout}
              activeEducationContent={activeEducationContent}
            />
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
          activeContent={activeEducationContent}
          handleButtonClick={handleButtonClick}
          isAchievementsPageOpen={isAchievementsPageOpen}
        />
      )}
    </>
  );
};
export default EducationLayout; // Export the EducationLayout component
