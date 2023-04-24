import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={`Wait for the loading`}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
