import HomeHeader from "./HomeHeader/HomeHeader";

import "./Header.scss";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const homepage = location.pathname === "/";
  const authpage = location.pathname === "/registration";

  return (
    <>
      {/* <Suspense fallback={null}>{homepage && <HomeHeader />}</Suspense> */}
      <HomeHeader />
    </>
  );
};
export default Header;
