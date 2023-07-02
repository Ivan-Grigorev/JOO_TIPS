import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../../Components/Header/Header";
import { Spinner } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <Spinner
              color="#7e0039c2"
              size={"xl"}
              emptyColor="gray.200"
              speed="900ms"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
