import CookieConsent from "react-cookie-consent";
import "./Cookie.scss";
const CookieBanner = () => {
  const handleDeclineAll = () => {
    console.log("decline all");
  };
  const handleUseNeccessary = () => {
    console.log("user only neccessary");
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept all"
      cookieName="GDPRCookieConsent"
      style={{ background: "#1a4579" }}
      className="cookie-wrapper"
      buttonClasses="cookie-button"
      containerClasses="cookie-container"
      buttonWrapperClasses="button-origin-container"
      contentClasses="cookie-content"
      expires={150}
      disableButtonStyles
      disableStyles
    >
      This website uses cookies to enhance the user experience.
      <div className="custom-buttons-container">
        <button className="cookie-button" onClick={handleUseNeccessary}>
          Necessary
        </button>

        <button className="cookie-button" onClick={handleDeclineAll}>
          Decline
        </button>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
