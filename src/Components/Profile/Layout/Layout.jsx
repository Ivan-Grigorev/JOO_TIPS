import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import "./Layout.scss";
import EducationHeader from "./EducationHeader/EducationHeader";
import EducationFooter from "./EducationFooter/EducationFooter";
import Topics from "../EducationContent/Topics/Topics";
import Lessons from "../EducationContent/Lessons/Lessons";
import Results from "../EducationContent/Results/Results";

const Layout = () => {
  const location = useLocation();

  const isLearningPage = location.pathname.includes("/education");
  const [activeEducationContent, setActiveEducationContent] =
    useState("Topics");

  const handleButtonClick = (contentKey) => {
    setActiveEducationContent(contentKey);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLearningPage ? (
        <>
          <EducationHeader />

          <main className="profile-hero education-hero">
            <Suspense fallback={<ChakraSpinner />}>
              {activeEducationContent === "Topics" && <Topics />}
              {activeEducationContent === "Lessons" && <Lessons />}
              {activeEducationContent === "Results" && <Results />}
            </Suspense>
          </main>

          <EducationFooter handleButtonClick={handleButtonClick} />
        </>
      ) : (
        <>
          <Header />

          <main className="profile-hero">
            <Suspense fallback={<ChakraSpinner />}>
              <Outlet />
            </Suspense>
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
