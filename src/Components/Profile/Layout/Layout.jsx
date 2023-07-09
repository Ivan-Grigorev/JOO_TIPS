import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<ChakraSpinner />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
