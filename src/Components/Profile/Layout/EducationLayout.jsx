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

const EducationLayout = () => {
  const [activeEducationContent, setActiveEducationContent] =
    useState("Topics");

  const handleButtonClick = (contentKey) => {
    setActiveEducationContent(contentKey);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <EducationHeader />

      {/* <div className="layout-container">
        <Sidebar
          activeContent={activeEducationContent}
          handleButtonClick={handleButtonClick}
        /> */}

      <main className="profile-hero education-hero">
        <Suspense fallback={<ChakraSpinner />}>
          {activeEducationContent === "Topics" && <Topics />}
          {activeEducationContent === "Lessons" && <Lessons />}
          {activeEducationContent === "Competitions" && <Competition />}
          {activeEducationContent === "Results" && <Results />}

          {/* {activeEducationContent === "Competition" && <Competition />}
            {activeEducationContent === "Examinations" && <Examinations />}
            {activeEducationContent === "Ratings" && <Ratings />}
            {activeEducationContent === "Matches" && <Matches />} */}
        </Suspense>
      </main>
      {/* </div> */}

      <EducationFooter
        activeContent={activeEducationContent}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};
export default EducationLayout;
