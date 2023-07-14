import { useState } from "react";
import ChangePasswordForm from "../../Components/ChangePassword/ChangePasswordForm";
import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import { useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";

import "../AuthPage/styles.scss";
import "../RecoveringPassword/RecoveringPassword.scss";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth">
      <>
        <header className="recover-header">
          <LogoLink />
        </header>

        <main>
          <ChangePasswordForm
            currentPassword={currentPassword}
            newPassword={newPassword}
            confirmedPassword={confirmedNewPassword}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            parentClass={".auth"}
          />
          )
        </main>
      </>
    </div>
  );
};

export default ChangePassword;
