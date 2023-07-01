import "./styles.scss";
import SignupForm from "../../Components/Authpage/Forms/Signup/Form";
import LoginForm from "../../Components/Authpage/Forms/Login/LoginForm";

export default function SignupLogin() {
  return (
    <>
      <div className="signup-login">
        <h1>
          <span>Log In</span>Sign Up
        </h1>
        <input
          className="checkbox"
          type="checkbox"
          id="reg-log"
          name="reg-log"
        />
        <label for="reg-log"></label>
        <div className="card-3d-wrap">
          <div className="card-3d-wrapper">
            <div className="card-front">
              <SignupForm />
            </div>
            <div className="card-back">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
