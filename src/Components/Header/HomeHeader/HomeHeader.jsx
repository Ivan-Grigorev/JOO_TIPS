import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";
import Title from "./TextBlock/Title";

const HomeHeader = () => {
  return (
    <>
      <div className="header-wrap">
        <header className="header container">
          <Navigation />

          <LoginBTN />

          <HomeMobileHeader />
        </header>
        <Title />
      </div>
    </>
  );
};

export default HomeHeader;
