import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import "./RecoveringPassword.scss";
import "../../Pages/AuthPage/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";
import { sendRecoverMail } from "../../redux/auth/auth-operations";
import { useState } from "react";

import Hero from "../../Components/RecoveringPage/RecoveringPassword/Hero/Hero";
import EmailWasSent from "../../Components/RecoveringPage/RecoveringPassword/EmailWasSent/EmailWasSent";
import {
  handleSetError,
  resetResetPasswordErrors,
} from "../../redux/auth/auth-slice";
import validateEmail from "../../helpers/validate-email";

const RecoveringPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailWasSent, setEmailWasSent] = useState(false);
  const errors = useSelector(selectUserErrors).resetPassword;

  const handleRecoverPassword = (e) => {
    e.preventDefault();

    if (email.length < 5 || validateEmail(email) === false) {
      dispatch(resetResetPasswordErrors());
      return dispatch(
        handleSetError({
          field: "resetPassword",
          error: "Invalid E-mail",
        })
      );
    }

    dispatch(sendRecoverMail({ email })).then(() => setEmailWasSent(true));
  };

  const handleChange = async (e) => setEmail(e.target.value);

  return (
    <>
      <div className="auth">
        <header className="recover-header">
          <LogoLink />
        </header>

        <main className="recover-hero">
          {!emailWasSent ? (
            <Hero
              email={email}
              errors={errors}
              handleChange={handleChange}
              handleRecoverPassword={handleRecoverPassword}
            />
          ) : (
            <EmailWasSent />
          )}
        </main>
      </div>
    </>
  );
};

export default RecoveringPassword;
