import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

const SingupFormFields = ({
  handleChange,
  nameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue,
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
          minlength="3"
          // disabled
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
          // disabled
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
          onkeyup="check();"
          placeholder="Password"
          min="6"
          maxlength="30"
          // disabled
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
          onkeyup="check();"
          placeholder="Confirm password"
          min="6"
          // disabled
        />
      </label>

      {/* <div className="message" id="message">
                {% for message in messages %}
                    {{ message }}
                {% endfor %}
            </div> */}
    </>
  );
};

export default SingupFormFields;
