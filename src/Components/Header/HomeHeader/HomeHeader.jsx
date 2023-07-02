import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";
import AuthHeader from "../AuthHeader/AuthHeader";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";

const HomeHeader = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className="header container">
        <Navigation />

        {isLogged ? <AuthHeader /> : <LoginBTN />}

        {/* <HomeMobileHeader /> */}
      </header>
    </>
  );
};

export default HomeHeader;
