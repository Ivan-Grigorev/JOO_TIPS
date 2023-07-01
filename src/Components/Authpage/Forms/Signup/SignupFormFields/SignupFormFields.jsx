import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

export default function SingupFormFields() {
  return (
    <>
      <label className="form-field name" htmlFor="name">
        <img className="auth-icons user-image" src={loginUser} alt="user" />
        <input
          type="text"
          name="username"
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
          name="confirm-password"
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
}
