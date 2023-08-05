import { Suspense, useState } from "react";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import EducationFooter from "./EducationFooter/EducationFooter";
import EducationHeader from "./EducationHeader/EducationHeader";
import Topics from "../EducationContent/Topics/Topics";
import Lessons from "../EducationContent/Lessons/Lessons";
import Results from "../EducationContent/Results/Results";
import Sidebar from "./Sidebar/Sidebar";

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

      <div className="layout-container">
        <Sidebar
          activeContent={activeEducationContent}
          handleButtonClick={handleButtonClick}
        />

        <main className="profile-hero education-hero">
          <Suspense fallback={<ChakraSpinner />}>
            {activeEducationContent === "Topics" && <Topics />}
            {activeEducationContent === "Lessons" && <Lessons />}
            {activeEducationContent === "Results" && <Results />}

            {activeEducationContent === "Competition" && <Topics />}
            {activeEducationContent === "Examinations" && <Results />}
            {activeEducationContent === "Ratings" && <Lessons />}
            {activeEducationContent === "Matches" && <Results />}
          </Suspense>
        </main>
      </div>

      <EducationFooter
        activeContent={activeEducationContent}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};
export default EducationLayout;
