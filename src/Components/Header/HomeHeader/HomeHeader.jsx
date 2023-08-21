import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";
import AuthHeader from "../AuthHeader/AuthHeader";
import { memo } from "react";

const HomeHeader = memo(() => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className="header">
        <div className="container flex">
          <Navigation />

          {isLoggedIn ? <AuthHeader /> : <LoginBTN />}
          {/* <HomeMobileHeader /> */}
        </div>
      </header>
    </>
  );
});

export default HomeHeader;
