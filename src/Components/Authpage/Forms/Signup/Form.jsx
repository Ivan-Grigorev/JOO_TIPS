import loginAt from ".././icons/login_at.svg";
import loginLockOpen from ".././icons/login_lock_open.svg";
import loginUser from ".././icons/login_user.svg";

export default function SignupForm() {
  return (
    <form method="POST">
      {/* {% csrf_token %} */}
      <div className="card-title">
        <p>Registration</p>
      </div>
      <div className="name">
        <img className="user-image" src={loginUser} alt="user" />
        <input name="username" placeholder="Name" minlength="3" disabled />
      </div>
      <div className="e-mail">
        <img className="email-image" src={loginAt} alt="email" />
        <input name="email" type="email" placeholder="E-mail" disabled />
      </div>
      <div className="password">
        <img className="lock-image" src={loginLockOpen} alt="lock icon" />
        <input
          name="password"
          id="password"
          onkeyup="check();"
          placeholder="Password"
          min="6"
          maxlength="30"
          disabled
        />
      </div>
      <div className="password">
        <img className="lock-image" src={loginLockOpen} alt="lock" />
        <input
          name="confirm-password"
          id="confirm_password"
          onkeyup="check();"
          placeholder="Confirm password"
          min="6"
          disabled
        />
      </div>
      {/* <div className="message" id="message">
                {% for message in messages %}
                    {{ message }}
                {% endfor %}
            </div> */}
      <div>
        <button className="btn-signup" onclick="showMessage()">
          Sign up
        </button>
      </div>
    </form>
  );
}
