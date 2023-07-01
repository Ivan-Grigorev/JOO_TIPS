import loginAt from "../.././icons/login_at.svg";
import loginLockOpen from "../.././icons/login_lock_open.svg";
import loginUser from "../.././icons/login_user.svg";

export default function LoginFormFields() {
  return (
    <>
      <div className="name">
        <img className="user-image" src={loginUser} alt="user" />
        <input name="username" placeholder="Name" required />
      </div>
      <div className="password">
        <img className="user-image" src={loginLockOpen} alt="user" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div className="message">
        {/* {% for message in messages %}
                {{ message }}
            {% endfor %} */}
      </div>
    </>
  );
}
