// Import necessary libraries, components, hooks and actions
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

// Main component
const ChangePassword = () => {
  // Create useDispatch hook instance
  const dispatch = useDispatch();

  // Use useState to handle password states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  // Use useSelector to select and handle errors related to password from Redux store
  const errors = useSelector(selectUserErrors).password;

  // Function to handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Use the 'name' attribute to determine which state update function to call
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if newPassword and confirmedNewPassword match
    const match = newPassword === confirmedNewPassword;
    if (!match) {
      dispatch(resetPasswordErrors());
      // Dispatch an action to set an error message in case the passwords do not match
      return dispatch(
        handleSetError({
          field: "password",
          error: "Passwords do not match",
        })
      );
    }

    // Attempt to change the password and handle the result
    try {
      const action = await dispatch(changePassword({ currentPassword, password: newPassword })); // prettier-ignore
      const originalPromiseResult = unwrapResult(action); // If the promise is resolved, this line will return the fulfilled value. If rejected, it will throw the error.
      // If the password change is successful, set isPasswordChanged to true
      setIsPasswordChanged(true);
    } catch (rejectedValueOrSerializedError) {
      // Log the error if the password change failed
      console.log(rejectedValueOrSerializedError); 
    }
  };

  return (
    <div className="auth">
      <>
        <header className="recover-header">
          <LogoLink />
        </header>

        <main>
          {/* If the password has been changed, show the PasswordWasChanged component, otherwise, show the ChangePasswordForm component */}
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
