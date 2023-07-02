import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";
import AuthHeader from "../AuthHeader/AuthHeader";

const HomeHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className="header container">
        <Navigation />


        {isLoggedIn ? <AuthHeader /> : <LoginBTN />}
        {/* <HomeMobileHeader /> */}
      </header>
    </>
  );
};

export default HomeHeader;
