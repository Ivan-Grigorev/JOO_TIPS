import LanguageSelect from "./LanguageSelect/LanguageSelect";
import LoginBTN from "./LoginBTN/LoginBTN";
import mobileBar from "./mobile_bar.svg";
import Links from "./Navigation/Links/Links";

const HomeMobileHeader = () => {
  return (
    <>
      <nav className="mobile-navbar">
        <div htmlFor="mobile-dropdown">
          {/* burger menu */}

          <img src={mobileBar} alt="mobile bar" width="50" height="50" />
        </div>

        <input type="checkbox" id="mobile-dropdown" />

        <div className="dropdown-slide">
          <Links />

          <div style={{ display: "flex" }}>
            {/* <button className="mobile-btn-login is-hidden">LOG IN</button> */}
            <LoginBTN isHidden="isHidden" />

            <LanguageSelect />
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeMobileHeader;
