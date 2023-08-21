import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { memo } from "react";

const LanguageCard = ({
  iconSrc,
  altText,
  languageName,
  userLanguages,
  chooseLanguage,
}) => {
  const isLanguageSelected =
    (userLanguages && userLanguages.includes(languageName)) || false;

  const handleChooseLanguage = () => {
    if (languageName === "Javascript" || languageName === "Python") {
      return isLanguageSelected
        ? toast.error("You already learning this language")
        : chooseLanguage(languageName);
    }
    toast.warning("This language is still in development process.");
  };

  const cardClassName = isLanguageSelected ? "disable__card" : "";

  return (
    <div className="card-wrapper">
      <div className={`card ${cardClassName}`} onClick={handleChooseLanguage}>
        <img
          src={iconSrc}
          alt={altText}
          className="programming-language-icon"
        />
        <p className="card__text">{languageName}</p>
        <div className="card-shine"></div>
      </div>
    </div>
  );
};

LanguageCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  userLanguages: PropTypes.arrayOf(
    PropTypes.oneOf([
      "Javascript",
      "Python",
      "HTML",
      "CSS",
      "SCSS",
      "SWIFT",
      "Solidity",
      "C++",
      "C#",
      "React",
      "Node/Express",
      "PHP",
      "Django",
      "Java",
      "Golang",
      "Kotlin",
      "MongoDB",
      "MySQL",
      "Docker",
      "Nginx",
      "TCP/IP",
    ])
  ).isRequired,

  chooseLanguage: PropTypes.func.isRequired,
};

export default memo(LanguageCard);
