import SingupFormFields from "./SignupFormFields/SignupFormFields";

export default function SignupForm() {
  return (
    <form method="POST">
      {/* {% csrf_token %} */}
      <div className="card-title">
        <p>Sign up</p>
      </div>

      <SingupFormFields />

      <div>
        <button className="btn-signup" onclick="showMessage()">
          Sign up
        </button>
      </div>
    </form>
  );
}
