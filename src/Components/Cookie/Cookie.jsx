import { Checkbox, Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./Cookie.scss";
import { useDispatch } from "react-redux";
import { setCookies } from "../../redux/cookies/cookies-operations";
import getCookie from "../../helpers/getCookie";
import ModalCookieDetails from "./ModalCookieDetails/ModalCookieDetails";

const CookieBanner = () => {
  // Define the default state for the user's cookie preferences
  const [selectedCookies, setSelectedCookies] = useState({
    performance: true,
    targeting: true,
    functionality: true,
    unclassified: true,
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const functionalCookie = getCookie("functionality");
    const targetingCookie = getCookie("targeting");
    const performanceCookie = getCookie("performance");

    const noCookies =
      !functionalCookie || !targetingCookie || !performanceCookie;

    if (noCookies) setShowBanner(true);

    // TODO Подумать как реализовать появление баннера
    // TODO (при каких условиях)
  }, [setShowBanner]);

  // State to handle the text change on the "Accept All" button
  const [buttonText, setButtonText] = useState("Accept all");

  const dispatch = useDispatch();

  // Update the cookie preference state when a checkbox is toggled
  const setCookieValue = (type, value) => {
    setSelectedCookies((prevState) => ({
      ...prevState,
      [type]: value,
    }));

    // Update the button text once any checkbox is changed
    setButtonText("Save & Close");
  };

  // Handle the "Accept All" button click
  const handleAcceptAll = () => {
    const newCookieState = {
      performance: true,
      targeting: true,
      functionality: true,
      unclassified: true,
    };

    // Dispatch an action to set all cookies to true
    if (buttonText === "Accept all".toLowerCase()) {
      setSelectedCookies(newCookieState);
      return dispatch(setCookies(newCookieState));
    }

    dispatch(setCookies(selectedCookies));
    // TODO: Implement logic to close the cookie banner
  };

  // Handle the "Decline All" button click
  const handleDeclineAll = () => {
    // Set only the strictlyNecessary cookie to true and others to false
    const newCookieState = {
      performance: false,
      targeting: false,
      functionality: false,
      unclassified: false,
    };
    setSelectedCookies(newCookieState);

    // Update the button text
    setButtonText("Save & Close");
    // Dispatch an action to update the cookie preferences
    dispatch(setCookies(newCookieState));

    // TODO: Implement logic to close the cookie banner
  };

  const handleSetAllCookies = () => {
    const newCookieState = {
      performance: true,
      targeting: true,
      functionality: true,
      unclassified: true,
    };

    dispatch(setCookies(newCookieState));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="cookie-container">
        <h1>This website uses cookies</h1>
        <p>
          We use cookies to improve user experience. Choose what cookies you
          allow us to use. You can read more about our Cookie Policy in our
          Privacy policy.
        </p>

        <ul className="cookie-list">
          <li>
            <Checkbox isDisabled defaultChecked size="sm">
              Strictly neccessary
            </Checkbox>
          </li>
          <li>
            <Checkbox
              size="sm"
              isChecked={selectedCookies.performance}
              onChange={(e) => setCookieValue("performance", e.target.checked)}
            >
              Performance
            </Checkbox>
          </li>
          <li>
            <Checkbox
              size="sm"
              isChecked={selectedCookies.targeting}
              onChange={(e) => setCookieValue("targeting", e.target.checked)}
            >
              Targeting
            </Checkbox>
          </li>
          <li>
            <Checkbox
              size="sm"
              isChecked={selectedCookies.unclassified}
              onChange={(e) => setCookieValue("unclassified", e.target.checked)}
            >
              unclassified
            </Checkbox>
          </li>
          <li>
            <Checkbox
              size="sm"
              isChecked={selectedCookies.functionality}
              onChange={(e) =>
                setCookieValue("functionality", e.target.checked)
              }
            >
              Functionality
            </Checkbox>
          </li>
        </ul>

        {/* Button group with updated button text logic */}
        <ButtonGroup>
          <Button
            size="xs"
            colorScheme="green"
            onClick={handleAcceptAll}
            className="cookie__buttons"
          >
            {buttonText}
          </Button>
          <Button
            size="xs"
            colorScheme="red"
            onClick={handleDeclineAll}
            className="cookie__buttons"
          >
            Decline all
          </Button>
        </ButtonGroup>

        <ModalCookieDetails
          selectedCookies={selectedCookies}
          setCookieValue={setCookieValue}
          handleSetAllCookies={handleSetAllCookies}
          handleDeclineAll={handleDeclineAll}
          onBannerClose={() => setShowBanner(false)}
        />
      </div>
    </>
  );
};

export default CookieBanner;
