import { Checkbox, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import "./Cookie.scss";
import { useDispatch } from "react-redux";
import { setCookies } from "../../redux/cookies/cookies-operations";

const CookieBanner = () => {
  const [selectedCookies, setSelectedCookies] = useState({
    strictlyNecessary: true,
    performance: true,
    targeting: true,
    functionality: true,
  });
  const [buttonText, setButtonText] = useState("Accept all"); // новый state для текста кнопки
  const dispatch = useDispatch();

  const setCookieValue = (type, value) => {
    setSelectedCookies((prevState) => ({
      ...prevState,
      [type]: value,
    }));

    // изменяем текст кнопки
    setButtonText("Save & Close");

    // сохраняем выбор пользователя
    // dispatch(setCookies({ [type]: value }));
  };

  const handleAcceptAll = () => {
    setButtonText("Save & Close"); // изменяем текст кнопки
    dispatch(setCookies(selectedCookies));

    // todo ЗАКРЫТЬ БАННЕР
  };

  const handleDeclineAll = () => {
    setSelectedCookies({
      strictlyNecessary: true,
      performance: false,
      targeting: false,
      functionality: false,
    });
    setButtonText("Save & Close"); // изменяем текст кнопки
    dispatch(
      setCookies({
        strictlyNecessary: true,
        performance: false,
        targeting: false,
        functionality: false,
      })
    );

    // todo ЗАКРЫТЬ БАННЕР
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
        <ButtonGroup>
          <Button size="xs" colorScheme="green" onClick={handleAcceptAll}>
            {buttonText} {/* используем переменную для управления текстом */}
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
