import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../../Components/Header/Header";
import { Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom/dist";

const Layout = () => {
  const location = useLocation();
  const authpage = location.pathname === "/registration";
  return (
    <>
      {!authpage && (
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
      )}
    </>
  );
};

export default Layout;
