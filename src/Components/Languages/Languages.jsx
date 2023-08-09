import "./Languages.scss";
import Python from "./icons/python_logo.svg";
import Javascript from "./icons/javascript_logo.svg";
import JAVA from "./icons/java_logo.svg";
import SWIFT from "./icons/swift_logo.svg";
import CSharp from "./icons/csharp_logo.svg";
import CPlusPlus from "./icons/cplusplus_logo.svg";
import Golang from "./icons/golang_logo.svg";
import PHP from "./icons/php_logo.svg";

import LanguageCard from "./LanguageCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  fetchlanguages,
} from "../../redux/languages/languages-operations";
import { selectUserLanguages } from "../../redux/languages/languages-selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const languagesData = [
  { iconSrc: Python, altText: "python", languageName: "Python" },
  { iconSrc: Javascript, altText: "javascript", languageName: "Javascript" },
  { iconSrc: JAVA, altText: "java", languageName: "Java" },
  { iconSrc: SWIFT, altText: "swift", languageName: "Swift" },
  { iconSrc: CSharp, altText: "C#", languageName: "C#" },
  { iconSrc: CPlusPlus, altText: "C++", languageName: "C++" },
  { iconSrc: Golang, altText: "golang", languageName: "Golang" },
  { iconSrc: PHP, altText: "PHP", languageName: "PHP" },
];

const Languages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLanguages = useSelector(selectUserLanguages);

  useEffect(() => {
    dispatch(fetchlanguages());
  }, [dispatch]);

  console.log(`userLanguages = = = ${userLanguages}`);
  const chooseLanguage = (language) => {
    // console.log(language);
    dispatch(addLanguage({ language }));
    navigate("/education");
  };

  return (
    <section className="languages-section section">
      <p className="languages-title">Programming languages</p>
      <div className="language-cards-list">
        {languagesData.map((language, index) => (
          <LanguageCard
            key={index}
            {...language}
            chooseLanguage={chooseLanguage}
            userLanguages={userLanguages}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
