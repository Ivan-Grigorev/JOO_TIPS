import { useEffect } from "react";
import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

const SignupFormFields = ({
  handleChange,
  nameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  errors,
}) => {
  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll("#signup-form input"));
    const messages = document.querySelector("#signup-form .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);
    
    // it's get it more smoothly
    if (errors.length > 0) inputs.some((input) => input.value.length > 0) ? show() : hide(); // prettier-ignore
  });
  return (
    <>
      <label className="form-field name" htmlFor="name">
        <img className="auth-icons user-image" src={loginUser} alt="user" />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={nameValue}
          placeholder="Name"
          minLength="3"
          required
        />
      </label>

      <label className="form-field e-mail" htmlFor="email">
        <img className="auth-icons email-image" src={loginAt} alt="email" />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={emailValue}
          placeholder="E-mail"
          required
        />
      </label>

      <label className="form-field password" htmlFor="password">
        <img
          className="auth-icons lock-image"
          src={loginLockOpen}
          alt="lock icon"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={passwordValue}
          id="password"
          placeholder="Password"
          min="6"
          maxLength="30"
          required
        />
      </label>

      <label className="form-field password" htmlFor="confirm-password">
        <img className="auth-icons lock-image" src={loginLockOpen} alt="lock" />
        <input
          type="password"
          name="confirmed-password"
          onChange={handleChange}
          value={confirmPasswordValue}
          id="confirm_password"
          placeholder="Confirm password"
          min="6"
          required
        />
      </label>

      <div className="message" id="message">
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>
    </>
  );
};

export default SignupFormFields;
