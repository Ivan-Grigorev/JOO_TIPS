import { useDispatch, useSelector } from "react-redux";
import LoginFormFields from "./LoginFormFields/LoginFormFields";
import { useState } from "react";
import { logIn } from "../../../../redux/auth/auth-operations";
import { selectUserErrors } from "../../../../redux/auth/auth-selectors";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(selectUserErrors);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    // dont need a navigate to homepage, because authpage is a restricted route (see App.jsx)
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="card-title">
          <p>Log in</p>
        </div>

        <LoginFormFields
          handleChange={handleChange}
          emailValue={email}
          password={password}
          errors={errors.login}
        />

        <button className="btn-login" type="submit">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
