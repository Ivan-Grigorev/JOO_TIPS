import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

export default function LoginFormFields() {
  return (
    <>
      <label className="form-field name" htmlFor="username">
        <img className="auth-icons user-image" src={loginUser} alt="user" />
        <input name="username" placeholder="Name" required />
      </label>

      <label className="form-field password" htmlFor="password">
        <img className="auth-icons user-image" src={loginLockOpen} alt="user" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </label>
      <div className="message">
        {/* {% for message in messages %}
                {{ message }}
            {% endfor %} */}
      </div>
    </>
  );
}
