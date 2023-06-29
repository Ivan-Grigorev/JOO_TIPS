import Navigation from "./Navigation/Nav";
import LoginBTN from "./LoginBTN/LoginBTN";
import HomeMobileHeader from "./HomeMobileHeader";
import HeaderContent from "../HeaderContent/HeaderContent";

const HomeHeader = () => {
  return (
    <>
      <div className="header-wrap">
        <header className="header container">
          <Navigation />

          <LoginBTN />

          <HomeMobileHeader />
        </header>

        <HeaderContent />
      </div>
    </>
  );
};

export default HomeHeader;
