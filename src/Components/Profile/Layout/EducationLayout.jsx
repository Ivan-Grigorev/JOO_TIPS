import { Suspense, useState } from "react";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import EducationFooter from "./EducationFooter/EducationFooter";
import EducationHeader from "./EducationHeader/EducationHeader";
import Topics from "../EducationContent/Topics/Topics";
import Lessons from "../EducationContent/Lessons/Lessons";
import Results from "../EducationContent/Results/Results";
import Sidebar from "./Sidebar/Sidebar";
import Competition from "../EducationContent/Competition/Competition";
import Examinations from "../EducationContent/Examinations/Examinations";
import Matches from "../EducationContent/Matches/Matches";
import Ratings from "../EducationContent/Ratings/Ratings";
import { useSwipeable } from "react-swipeable";

// const handleButtonClick = (contentKey) => {
//   setActiveEducationContent(contentKey);
//   window.scrollTo(0, 0);
// };

const EducationLayout = () => {
  const contentOrder = ["Topics", "Lessons", "Competitions", "Results"];
  const [activeEducationContentIndex, setActiveEducationContentIndex] =
    useState(0);

  const handleSwipe = (direction) => {
    let nextIndex;

    if (direction === "LEFT") {
      nextIndex = (activeEducationContentIndex + 1) % contentOrder.length;
    } else if (direction === "RIGHT") {
      nextIndex =
        (activeEducationContentIndex - 1 + contentOrder.length) %
        contentOrder.length;
    }

    setActiveEducationContentIndex(nextIndex);
    window.scrollTo(0, 0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  const activeEducationContent = contentOrder[activeEducationContentIndex];

  return (
    <>
      <EducationHeader />

      <main className="profile-hero education-hero" {...handlers}>
        {activeEducationContent === "Topics" && <Topics />}
        {activeEducationContent === "Lessons" && <Lessons />}
        {activeEducationContent === "Competitions" && <Competition />}
        {activeEducationContent === "Results" && <Results />}
      </main>

      <EducationFooter
        activeContent={activeEducationContent}
        // handleButtonClick={handleButtonClick}
      />
    </>
  );
};

export default EducationLayout;
