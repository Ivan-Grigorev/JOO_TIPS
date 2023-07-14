// Importing necessary components and stylesheets
import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import "./RecoveringPassword.scss";
import "../../Pages/AuthPage/styles.scss";

// Importing necessary hooks and functions from Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";
import { sendRecoverMail } from "../../redux/auth/auth-operations";
import { handleSetError, resetResetPasswordErrors } from "../../redux/auth/auth-slice";

// Importing useState hook from react for managing local state
import { useState } from "react";

// Importing child components
import Hero from "../../Components/RecoveringPage/RecoveringPassword/Hero/Hero";
import EmailWasSent from "../../Components/RecoveringPage/RecoveringPassword/EmailWasSent/EmailWasSent";

// Importing helper function for email validation
import validateEmail from "../../helpers/validate-email";

// Definition of RecoveringPassword component
const RecoveringPassword = () => {
  // Using redux hook to dispatch actions
  const dispatch = useDispatch();

  // Setting up local state for email and emailWasSent
  const [email, setEmail] = useState("");
  const [emailWasSent, setEmailWasSent] = useState(false);

  // Selecting error messages from Redux store
  const errors = useSelector(selectUserErrors).resetPassword;

  // Function to handle form submission for password recovery
  const handleRecoverPassword = (e) => {
    e.preventDefault();

    // Validation of email and dispatching error in case of invalid email
    if (email.length < 5 || validateEmail(email) === false) {
      dispatch(resetResetPasswordErrors());
      return dispatch(
        handleSetError({
          field: "resetPassword",
          error: "Invalid E-mail",
        })
      );
    }

    // Dispatching an action to send recovery mail and then setting local state
    dispatch(sendRecoverMail({ email })).then(() => setEmailWasSent(true));
  };

  // Function to handle input field value change
  const handleChange = async (e) => setEmail(e.target.value);

  // Rendering component
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

// Exporting component
export default RecoveringPassword;
