import { Suspense, useState } from "react"; // Import necessary modules from React
import { useMediaQuery } from "@react-hook/media-query"; // Import a media query
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner"; // Import a loading spinner component
import EducationFooter from "./EducationFooter/EducationFooter"; // Import the footer component
import EducationHeader from "./EducationHeader/EducationHeader"; // Import the header component
import Lessons from "../EducationContent/Lessons/Lessons"; // Import the lessons component
import Results from "../EducationContent/Results/Results"; // Import the results component
import Competition from "../EducationContent/Competition/Competition"; // Import the competition component
import Swipe from "./Swipe/Swipe"; // Import the swipe component
import SwipeIndicator from "./SwipeIndicator/SwipeIndicator";

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
      <EducationHeader isAchievementsPageOpen={isAchievementsPageOpen} />
      {/* Render the header component with a prop */}
      <main className={`profile-hero education-hero ${achievementsHeroClass}`}>
        <Suspense fallback={<ChakraSpinner />}>
          {/* // Suspense for lazy loading components */}
          {activeEducationContent === "Topics" && (
            <Swipe hideLayout={hideLayout} showLayout={showLayout} /> // Render Swipe component if active content is "Topics"
          )}
          {activeEducationContent === "Lessons" && <Lessons />}
          {/* Lessons component if active content is "Lessons" */}
          {activeEducationContent === "Competitions" && <Competition />}
          {/* Render Competition component if active content is "Competitions" */}
          {activeEducationContent === "Results" && <Results />}
          {/* Results component if active content is "Results" */}
        </Suspense>
      </main>

      {!isLargeScreen && (
        <SwipeIndicator
          activeEducationContent={activeEducationContent}
          isAchievementsPageOpen={isAchievementsPageOpen}
        />
      )}

      <EducationFooter
        activeContent={activeEducationContent}
        handleButtonClick={handleButtonClick}
        isAchievementsPageOpen={isAchievementsPageOpen}
      />
    </>
  );
};
export default EducationLayout; // Export the EducationLayout component
