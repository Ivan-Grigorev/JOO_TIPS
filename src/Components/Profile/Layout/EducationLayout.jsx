import { Suspense, lazy, useEffect, useState } from "react"; // Import necessary modules from React
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner"; // Import a loading spinner component
import EducationFooter from "./EducationFooter/EducationFooter"; // Import the footer component
import EducationHeader from "./EducationHeader/EducationHeader"; // Import the header component
import { Outlet, useLocation } from "react-router-dom";

const SwipeIndicator = lazy(() => import("./SwipeIndicator/SwipeIndicator"));

const EducationLayout = () => {
  // Create a state variable to track active content
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const location = useLocation();

  // CSS class based on whether achievements page is open
  useEffect(() => {
    const achievementsRoute = location.pathname === "/education/achievements";
    const hero = document.querySelector(".profile-hero");

    achievementsRoute
      ? hero.classList.add("achievements-hero")
      : hero.classList.remove("achievements-hero");
  }, [location.pathname]);

  useEffect(() => {
    const isLarge = window.matchMedia("(min-width: 1024px)").matches;
    setIsLargeScreen(isLarge);
  }, []);

  return (
    <>
      <EducationHeader />
      <main className="profile-hero education-hero">
        <div className="container">
          <Suspense fallback={<ChakraSpinner />}>
            {/*  Suspense for lazy loading components */}
            <Outlet hideLayout={() => console.log("works")} />
          </Suspense>
        </div>
      </main>

      {!isLargeScreen && <SwipeIndicator />}

      {!isLargeScreen && <EducationFooter />}
    </>
  );
};
export default EducationLayout; // Export the EducationLayout component
