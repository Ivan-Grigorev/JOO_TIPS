import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Switcher = () => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(location.hash === "#login");
  }, [location]);

  useEffect(() => {
    const signSpan = document.querySelector("span.sign");
    const logSpan = document.querySelector("span.log");

    if (isChecked) {
      logSpan.classList.add("auth-active");
      signSpan.classList.remove("auth-active");
    } else {
      logSpan.classList.remove("auth-active");
      signSpan.classList.add("auth-active");
    }
  });

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1>
        <span className="sign">Sign up</span>{" "}
        <span className="log">Log in</span>
      </h1>
      <input
        className="checkbox"
        type="checkbox"
        id="reg-log"
        name="reg-log"
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label htmlFor="reg-log"></label>
    </>
  );
};

export default Switcher;
