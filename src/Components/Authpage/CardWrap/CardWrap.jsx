import LoginForm from "../Forms/Login/LoginForm";
import SignupForm from "../Forms/Signup/SignupForm";

export default function CardWrap() {
  return (
    <>
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
    </>
  );
}
