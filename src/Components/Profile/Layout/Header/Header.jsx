import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink";
import Avatar from "./Avatar/Avatar";
import "./Header.scss";

const Header = () => {
  // TODO на месте Меню будет Chakra UI
  return (
    <>
      <header className="profile-header">
        {/* TODO здесь будет Chakra UI */}
        <div>Меню</div>
        <LogoLink />

        {/* <Avatar /> */}
      </header>
    </>
  );
};

export default Header;
