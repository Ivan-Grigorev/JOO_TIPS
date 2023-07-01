import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

export default function SingupFormFields() {
  return (
    <>
      <div className="form-field name">
        <img className="auth-icons user-image" src={loginUser} alt="user" />
        <input
          type="text"
          name="username"
          placeholder="Name"
          minlength="3"
          // disabled
        />
      </div>
      <div className="form-field e-mail">
        <img className="auth-icons email-image" src={loginAt} alt="email" />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          // disabled
        />
      </div>

      <div className="form-field password">
        <img
          className="auth-icons lock-image"
          src={loginLockOpen}
          alt="lock icon"
        />
        <input
          type="text"
          name="password"
          id="password"
          onkeyup="check();"
          placeholder="Password"
          min="6"
          maxlength="30"
          // disabled
        />
      </div>

      <div className="form-field password">
        <img className="auth-icons lock-image" src={loginLockOpen} alt="lock" />
        <input
          type="text"
          name="confirm-password"
          id="confirm_password"
          onkeyup="check();"
          placeholder="Confirm password"
          min="6"
          // disabled
        />
      </div>

      {/* <div className="message" id="message">
                {% for message in messages %}
                    {{ message }}
                {% endfor %}
            </div> */}
    </>
  );
}
