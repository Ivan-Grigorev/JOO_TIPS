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

    inputs.some((input) => input.value.length > 0)
      ? (messages.style.opacity = 1)
      : (messages.style.opacity = 0);
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

      <div className="message" >
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>
    </>
  );
}
