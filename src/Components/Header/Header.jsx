import HomeHeader from "./HomeHeader/HomeHeader";

import "./Header.scss";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const homepage = location.pathname === "/";

  return (
    <>
      <>{homepage && <HomeHeader />}</>
    </>
  );
};
export default Header;
