import "./Languages.scss";
import Python from "./icons/python_logo.svg";
import Javascript from "./icons/javascript_logo.svg";
import JAVA from "./icons/java_logo.svg";
import SWIFT from "./icons/swift_logo.svg";
import CSharp from "./icons/csharp_logo.svg";
import CPlusPlus from "./icons/cplusplus_logo.svg";
import Golang from "./icons/golang_logo.svg";
import PHP from "./icons/php_logo.svg";
import HTML from "./icons/html_logo.png";
import CSS from "./icons/css_logo.png";
import SCSS from "./icons/scss_logo.svg";
import Solidity from "./icons/solidity_logo.png";
import React from "./icons/react_logo.jpg";
import Node from "./icons/node.js_logo.png";
import Django from "./icons/django_logo.svg";
import Kotlin from "./icons/kotlin_logo.svg";
import MySQL from "./icons/mysql_logo.svg";
import Docker from "./icons/docker_logo.svg";
import Nginx from "./icons/nginx_logo.svg";
import TCP from "./icons/TCP_logo.svg";

import LanguageCard from "./LanguageCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  fetchlanguages,
  setActiveLanguage,
} from "../../redux/languages/languages-operations";
import { selectUserLanguages } from "../../redux/languages/languages-selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const languagesData = [
  { iconSrc: Javascript, languageName: "Javascript" },
  { iconSrc: React, languageName: "React" },
  { iconSrc: Node, languageName: "Node/Express" },
  { iconSrc: JAVA, languageName: "Java" },
  { iconSrc: SWIFT, languageName: "Swift" },
  { iconSrc: CSharp, languageName: "C#" },
  { iconSrc: CPlusPlus, languageName: "C++" },
  { iconSrc: Golang, languageName: "Golang" },
  { iconSrc: PHP, languageName: "PHP" },
  { iconSrc: HTML, languageName: "HTML" },
  { iconSrc: CSS, languageName: "CSS" },
  { iconSrc: SCSS, languageName: "SCSS" },
  { iconSrc: Solidity, languageName: "Solidity" },
  { iconSrc: Python, languageName: "Python" },
  { iconSrc: Django, languageName: "Django" },
  { iconSrc: Kotlin, languageName: "Kotlin" },
  { iconSrc: MySQL, languageName: "MySQL" },
  { iconSrc: Docker, languageName: "Docker" },
  { iconSrc: Nginx, languageName: "Nginx" },
  { iconSrc: TCP, languageName: "TCP/IP" },
];

const Languages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLanguages = useSelector(selectUserLanguages);

  useEffect(() => {
    dispatch(fetchlanguages());
  }, [dispatch]);

  const chooseLanguage = (language) => {
    dispatch(addLanguage({ language }));
    dispatch(setActiveLanguage({ language }));
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
