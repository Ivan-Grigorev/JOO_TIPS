import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import "./Layout.scss";
import EducationHeader from "./EducationHeader/EducationHeader";

const Layout = () => {
  const location = useLocation();

  const isLearningPage = location.pathname.includes("/education");

  return (
    <>
      {isLearningPage ? <EducationHeader /> : <Header />}

      <main className="profile-hero">
        <Suspense fallback={<ChakraSpinner />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
