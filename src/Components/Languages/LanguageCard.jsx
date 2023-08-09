const LanguageCard = ({ iconSrc, altText, languageName, chooseLanguage }) => (
  <div className="card-wrapper">
    <div className="card" onClick={() => chooseLanguage(languageName)}>
      <img src={iconSrc} alt={altText} className="programming-language-icon" />
      <p className="card__text">{languageName}</p>
      <div className="card-shine"></div>
    </div>
  </div>
);

export default LanguageCard;
