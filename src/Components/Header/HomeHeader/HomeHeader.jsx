import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";

const HomeHeader = () => {
  return (
    <>
      <header className="header container">
        <Navigation />

        <LoginBTN />

        {/* <HomeMobileHeader /> */}
      </header>
    </>
  );
};

export default HomeHeader;
