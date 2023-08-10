import { useEffect } from "react";
import LogoLink from "../../../Header/HomeHeader/Navigation/Links/LogoLink";
import Avatar from "../Header/Avatar/Avatar";

import "./EducationHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessonsPointsTotalSum } from "../../../../redux/lessons/lessons-operations";
import { selectLessonsTotalPoints } from "../../../../redux/lessons/lessons-selectors";
import { selectUserActiveLanguage } from "../../../../redux/languages/languages-selectors";
import { selectIsLoggedIn } from "../../../../redux/auth/auth-selectors";
import { fetchlanguages } from "../../../../redux/languages/languages-operations";

const EducationHeader = () => {
  const dispatch = useDispatch();

  const points = useSelector(selectLessonsTotalPoints);
  const activeLanguage = useSelector(selectUserActiveLanguage);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchLessonsPointsTotalSum());
    isLoggedIn && dispatch(fetchlanguages());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <>
        <header className="education-header">
          <div className="education-header__top">
            <div>Menu</div>

            <LogoLink width="80px" height="30px" />

            <Avatar w="50px" h="50px" />
          </div>

          <div className="education-header__points">
            <p>{activeLanguage}</p>
            <p>{points}</p>
          </div>
        </header>
      </>
    </>
  );
};

export default EducationHeader;
