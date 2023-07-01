import LoginFormFields from "./LoginFormFields/LoginFormFields";

export default function LoginForm() {
  return (
    <>
      <form method="POST">
        <div className="card-title">
          <p>Log in</p>
        </div>

        <LoginFormFields />

        <button className="btn-login" type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
