import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";

const HomeHeader = () => {
  return (
    <>
      <div className="header-wrap">
        <header className="header container">
          <Navigation />

          <LoginBTN />

          <HomeMobileHeader />
        </header>
      </div>
    </>
  );
};

export default HomeHeader;
