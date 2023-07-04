import { useEffect } from "react";
import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";

export default function LoginFormFields({
  handleChange,
  emailValue,
  passwordValue,
  errors,
}) {
  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll("#login-form input"));
    const messages = document.querySelector("#login-form .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);
    
    // it's get it more smoothly
    if (errors.length > 0) inputs.some((input) => input.value.length > 0) ? show() : hide(); // prettier-ignore
  });

  return (
    <>
      <label className="form-field name" htmlFor="email">
        <img className="auth-icons user-image" src={loginAt} alt="mail icon" />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={emailValue}
          required
        />
      </label>

      <label className="form-field password" htmlFor="password">
        <img
          className="auth-icons user-image"
          src={loginLockOpen}
          alt="lock icon"
        />
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={passwordValue}
          type="password"
          required
        />
      </label>

      <div className="message">
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>
    </>
  );
}
