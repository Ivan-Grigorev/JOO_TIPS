import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink";
import Avatar from "../Header/Avatar/Avatar";

import "./EducationHeader.scss";

const EducationHeader = () => {
  const points = 6876;
  return (
    <>
      <>
        <header className="education-header">
          <div className="education-header__top">
            <div>Menu</div>

            <LogoLink width="80px" height="30px" />

            <Avatar w="50px" h="50px" />
          </div>

          <div className="education-header__points">{points}</div>
        </header>
      </>
    </>
  );
};

export default EducationHeader;
