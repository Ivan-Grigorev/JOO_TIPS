import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Switcher = () => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(location.hash === "#login");
  }, [location]);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1>
        <span>Sign up</span>Log in
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
