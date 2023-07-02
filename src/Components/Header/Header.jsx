import HomeHeader from "./HomeHeader/HomeHeader";

import "./Header.scss";

import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";

import { memo } from "react";
const Header = () => {

  return (
    <>
      {/* <Suspense fallback={null}>{homepage && <HomeHeader />}</Suspense> */}
      {/* {!authpage && <HomeHeader />} */}
      {/* {!authpage && <AuthHeader />} */}
      <HomeHeader />
    </>
  );
};
export default memo(Header);
