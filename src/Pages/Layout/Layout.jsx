import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../../Components/Header/Header";
import ChakraSpinner from "../../Components/ChakraUI/Spinner/Spinner";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<ChakraSpinner />}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
