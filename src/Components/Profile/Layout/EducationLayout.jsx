import { Suspense, useState } from "react";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import EducationFooter from "./EducationFooter/EducationFooter";
import EducationHeader from "./EducationHeader/EducationHeader";
import Lessons from "../EducationContent/Lessons/Lessons";
import Results from "../EducationContent/Results/Results";
import Competition from "../EducationContent/Competition/Competition";
import Swipe from "./Swipe/Swipe";

const EducationLayout = () => {
  const [activeEducationContent, setActiveEducationContent] =
    useState("Topics");
  const [isAchievementsPageOpen, setIsAchievementsPageOpen] = useState(false);

  const handleButtonClick = (contentKey) => {
    setActiveEducationContent(contentKey);
    window.scrollTo(0, 0);
  };

  const hideLayout = () => setIsAchievementsPageOpen(false);
  const showLayout = () => setIsAchievementsPageOpen(true);

  const achievementsHeroClass = isAchievementsPageOpen === true ? "achievements-hero" : ""; // prettier-ignore

  return (
    <>
      <EducationHeader isAchievementsPageOpen={isAchievementsPageOpen} />

      <main className={`profile-hero education-hero ${achievementsHeroClass}`}>
        <Suspense fallback={<ChakraSpinner />}>
          {activeEducationContent === "Topics" && (
            <Swipe hideLayout={hideLayout} showLayout={showLayout} />
          )}
          {activeEducationContent === "Lessons" && <Lessons />}
          {activeEducationContent === "Competitions" && <Competition />}
          {activeEducationContent === "Results" && <Results />}
        </Suspense>
      </main>
      {/* </div> */}

      <EducationFooter
        activeContent={activeEducationContent}
        handleButtonClick={handleButtonClick}
        isAchievementsPageOpen={isAchievementsPageOpen}
      />
    </>
  );
};
export default EducationLayout;
