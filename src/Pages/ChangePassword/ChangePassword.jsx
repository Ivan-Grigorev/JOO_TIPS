import { useState } from "react";
import ChangePasswordForm from "../../Components/ChangePassword/ChangePasswordForm";
import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import { useDispatch, useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";

import "../AuthPage/styles.scss";
import "../RecoveringPassword/RecoveringPassword.scss";
import { changePassword } from "../../redux/auth/auth-operations";
import {
  handleSetError,
  resetPasswordErrors,
} from "../../redux/auth/auth-slice";
import PasswordWasChanged from "../../Components/ChangePassword/PasswordWasChanged";
import { unwrapResult } from "@reduxjs/toolkit";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const errors = useSelector(selectUserErrors).password;

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "currentPassword":
        setCurrentPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmedNewPassword":
        setConfirmedNewPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const match = newPassword === confirmedNewPassword;
    if (!match) {
      dispatch(resetPasswordErrors());
      return dispatch(
        handleSetError({
          field: "password",
          error: "Passwords do not match",
        })
      );
    }

    try {
      const action = await dispatch(changePassword({ currentPassword, password: newPassword })); // prettier-ignore
      const originalPromiseResult = unwrapResult(action); //! do not delete!!!
      // Если запрос успешен, то переход в след. стадию
      setIsPasswordChanged(true);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError); // Если запрос не успешен, выведет ошибку
    }
  };

  return (
    <div className="auth">
      <>
        <header className="recover-header">
          <LogoLink />
        </header>

        <main>
          {!isPasswordChanged ? (
            <ChangePasswordForm
              currentPassword={currentPassword}
              newPassword={newPassword}
              confirmedNewPassword={confirmedNewPassword}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              parentClass={".auth"}
            />
          ) : (
            <PasswordWasChanged />
          )}
        </main>
      </>
    </div>
  );
};

export default ChangePassword;
