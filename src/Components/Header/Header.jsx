import HomeHeader from "./HomeHeader/HomeHeader";

import "./Header.scss";
import { useLocation } from "react-router";
import AuthHeader from "./AuthHeader/AuthHeader";

const Header = () => {
  const location = useLocation();
  const homepage = location.pathname === "/";
  const authpage = location.pathname === "/registration";

  return (
    <>
      {/* <Suspense fallback={null}>{homepage && <HomeHeader />}</Suspense> */}
      {/* {!authpage && <HomeHeader />} */}
      {/* {!authpage && <AuthHeader />} */}
      <HomeHeader />
    </>
  );
};
export default Header;
