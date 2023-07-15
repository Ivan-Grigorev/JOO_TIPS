import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isTokenExpired,
  setNewPassword,
} from "../../../redux/auth/auth-operations";
import {
  selectRestorePasswordToken,
  selectUserErrors,
} from "../../../redux/auth/auth-selectors";
import { useParams } from "react-router-dom";

// Import styles and components
import "../RecoveringPassword.scss";
import "../../../Pages/AuthPage/styles.scss";
import Form from "../../../Components/RecoveringPage/SetNewPassword/Form";
import LogoLink from "../../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import NotFound from "../../../Components/Errors/404";
import PasswordHasBeenChanged from "../../../Components/RecoveringPage/PasswordHasBeenChanged/PasswordHasBeenChanged";
import { handleSetError } from "../../../redux/auth/auth-slice";
import { unwrapResult } from "@reduxjs/toolkit";

const SetNewPassword = () => {
  // Hooking into Redux's dispatch functionality
  const dispatch = useDispatch();

  // useParams hook is used to access the parameters of the current route (the token in this case)
  const { token } = useParams();

  // Using useSelector to access the current state of the token from Redux store
  const isTokenFresh = useSelector(selectRestorePasswordToken);
  const errors = useSelector(selectUserErrors).password;

  // Setting up local states for password, confirmed password and mail confirmation
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordHasBeenChanged, setpasswordHasBeenChanged] = useState(false);

  // Handler function for input changes
  const handleChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "password":
        setPassword(value);
        break;
      case "confirmedPassword":
        setConfirmedPassword(value);
        break;
      default:
        break;
    }
  };

  // On component mount, checks if the token has expired
  useEffect(() => {
    dispatch(isTokenExpired({ token }));
  }, [token, dispatch]);

  // Handler function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const match = password === confirmedPassword;
    if (!match) {
      return dispatch(
        handleSetError({
          field: "password",
          error: "Passwords do not match",
        })
      );
    }

    try {
      const action = await  dispatch(setNewPassword({ token, password, confirmedPassword })); // prettier-ignore
      const originalPromiseResult = unwrapResult(action); //! do not delete!!!
      // Если запрос успешен, то переход в след. стадию
      setpasswordHasBeenChanged(true);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError); // Если запрос не успешен, выведет ошибку
    }
  };

  // Component return
  return (
    <>
      <div className="auth recover-setNewPassword">
        {/* If token is fresh, it allows the user to set a new password. Otherwise, it shows a 'not found' page */}
        {isTokenFresh === true ? (
          <>
            <header className="recover-header">
              <LogoLink />
            </header>

            <main>
              {/* If the mail has not been sent, shows the form. Otherwise, it shows a 'password has been changed' page */}
              {!passwordHasBeenChanged ? (
                <Form
                  password={password}
                  confirmedPassword={confirmedPassword}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  parentClass={".auth"}
                />
              ) : (
                <PasswordHasBeenChanged />
              )}
            </main>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default SetNewPassword;
