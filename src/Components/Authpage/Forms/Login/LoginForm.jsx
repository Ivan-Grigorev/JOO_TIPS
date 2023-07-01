import loginAt from ".././icons/login_at.svg";
import loginLockOpen from ".././icons/login_lock_open.svg";
import loginUser from ".././icons/login_user.svg";

export default function LoginForm() {
  return (
    <>
      <form method="POST">
        <div className="card-title">
          <p>Log in</p>
        </div>
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
        <button className="btn-login" type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
