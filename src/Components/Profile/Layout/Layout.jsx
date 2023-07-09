import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import './Layout.scss'

const Layout = () => {
  return (
    <>
      <Header />

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
