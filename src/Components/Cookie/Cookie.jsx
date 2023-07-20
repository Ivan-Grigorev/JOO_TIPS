import { Checkbox, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import "./Cookie.scss";
import { useDispatch } from "react-redux";
import { setCookies } from "../../redux/cookies/cookies-operations";

const CookieBanner = () => {
  // Define the default state for the user's cookie preferences
  const [selectedCookies, setSelectedCookies] = useState({
    strictlyNecessary: true,
    performance: true,
    targeting: true,
    functionality: true,
  });

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
    // Update the button text
    setButtonText("Save & Close");
    // Dispatch an action to set all cookies to true
    dispatch(setCookies(selectedCookies));

    // TODO: Implement logic to close the cookie banner
  };

  // Handle the "Decline All" button click
  const handleDeclineAll = () => {
    // Set only the strictlyNecessary cookie to true and others to false
    const newCookieState = {
      strictlyNecessary: true,
      performance: false,
      targeting: false,
      functionality: false,
    };
    setSelectedCookies(newCookieState);

    // Update the button text
    setButtonText("Save & Close");
    // Dispatch an action to update the cookie preferences
    dispatch(setCookies(newCookieState));

    // TODO: Implement logic to close the cookie banner
  };

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
          <Button size="xs" colorScheme="green" onClick={handleAcceptAll}>
            {buttonText}
          </Button>
          <Button size="xs" colorScheme="red" onClick={handleDeclineAll}>
            Decline all
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default CookieBanner;
