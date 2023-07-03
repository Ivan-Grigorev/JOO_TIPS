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
          // disabled
        />
      </label>

      <div className="message" id="message">{errors} </div>
    </>
  );
};

export default SignupFormFields;
