import { NavLink } from "react-router-dom";
import LogoLink from "../../../../Header/HomeHeader/Navigation/Links/LogoLink";
import MissedLessonsIndicator from "../MissedLessonsIndicator/MissedLessonsIndicator";

const Navigation = ({ contentItems }) => {
  return (
    <>
      <nav className="education-navigation">
        <MissedLessonsIndicator />

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
