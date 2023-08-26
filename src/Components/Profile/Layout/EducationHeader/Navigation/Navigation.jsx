import { NavLink } from "react-router-dom";
import LogoLink from "../../../../Header/HomeHeader/Navigation/Links/LogoLink";

const Navigation = ({ contentItems }) => {
  return (
    <>
      <nav className="education-navigation">
        {contentItems.map((item) => (
          <NavLink key={item.key} to={item.to} ref={item.ref}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <LogoLink width="80px" height="30px" />
    </>
  );
};

export default Navigation;
