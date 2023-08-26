import { Suspense, lazy, useEffect, useState } from "react"; // Import necessary modules from React
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner"; // Import a loading spinner component
import EducationFooter from "./EducationFooter/EducationFooter"; // Import the footer component
import EducationHeader from "./EducationHeader/EducationHeader"; // Import the header component
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";
import { fetchActiveLessonPoints } from "../../../redux/lessons/lessons-operations";
import { fetchlanguages } from "../../../redux/languages/languages-operations";

const SwipeIndicator = lazy(() => import("./SwipeIndicator/SwipeIndicator"));

const EducationLayout = () => {
  // Create a state variable to track active content
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchActiveLessonPoints());
      dispatch(fetchlanguages());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <EducationHeader />
      <main className="profile-hero education-hero">
        <div className="container">
          <Suspense fallback={<ChakraSpinner />}>
            {/*  Suspense for lazy loading components */}
            <Outlet />
          </Suspense>
        </div>
      </main>

      {!isLargeScreen && <SwipeIndicator />}

      {!isLargeScreen && <EducationFooter />}
    </>
  );
};
export default EducationLayout; // Export the EducationLayout component
