const LanguageCard = ({
  iconSrc,
  altText,
  languageName,
  userLanguages,
  chooseLanguage,
}) => {
  const isLanguageSelected =
    (userLanguages && userLanguages.includes(languageName)) || false;

  return (
    <div className="card-wrapper">
      <div
        className={`card ${isLanguageSelected ? "disable__card" : ""}`}
        onClick={() => chooseLanguage(languageName)}
      >
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

export default LanguageCard;
