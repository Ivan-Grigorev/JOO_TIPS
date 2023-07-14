import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import "./RecoveringPassword.scss";
import "../../Pages/AuthPage/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";
import { sendRecoverMail } from "../../redux/auth/auth-operations";
import { useEffect, useState } from "react";

import Hero from "../../Components/RecoveringPage/RecoveringPassword/Hero/Hero";
import EmailWasSent from "../../Components/RecoveringPage/RecoveringPassword/EmailWasSent/EmailWasSent";

const RecoveringPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const errors = useSelector(selectUserErrors).resetPassword;
  const [emailWasSent, setEmailWasSent] = useState(false);

  useEffect(() => {
    const messages = document.querySelector(".auth .recover-hero .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);

    errors.length > 0 ? show() : hide();
  }, [errors]);

  const handleRecoverPassword = (e) => {
    e.preventDefault();

    if (email.length < 5) {
      return alert("Email must be at least 5 characters long");
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
