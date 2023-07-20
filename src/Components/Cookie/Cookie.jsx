import { Checkbox } from "@chakra-ui/react";
import "./Cookie.scss";
const CookieBanner = () => {
  // const handleDeclineAll = () => {
  //   console.log("decline all");
  // };
  // const handleAcceptNeccessary = () => {
  //   console.log("user only neccessary");
  // };
  // const handleAcceptAll = () => {
  //   console.log("Accept all");
  // };

  return (
    <>
      <div className="cookie-container">
        <h1>This website uses cookies</h1>
        <p>
          We use cookies to improve user experience. Choose what cookies you
          allow us to use. You can read more about our Cookie Policy in our
          Privacy policy.
        </p>

        <ul classname="cookie-list">
          <li>
            <Checkbox isDisabled defaultChecked size="sm">
              Strictly neccessary
            </Checkbox>
          </li>
          <li>
            <Checkbox size="sm">Perfomance</Checkbox>
          </li>
          <li>
            <Checkbox size="sm">Targeting</Checkbox>
          </li>
          <li>
            <Checkbox size="sm">Functionality</Checkbox>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CookieBanner;
