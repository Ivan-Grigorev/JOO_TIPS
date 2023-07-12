import { useDispatch, useSelector } from "react-redux";
import LoginFormFields from "./LoginFormFields/LoginFormFields";
import { useState } from "react";
import { logIn } from "../../../../redux/auth/auth-operations";
import { selectUserErrors } from "../../../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";

import "./LoginForm.scss";
import { Button } from "@chakra-ui/react";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useSelector(selectUserErrors); // errors

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
      <form method="POST" onSubmit={handleSubmit} id="login-form">
        <div className="card-title">
          <p>Log in</p>
        </div>

        <LoginFormFields
          handleChange={handleChange}
          emailValue={email}
          password={password}
          errors={login}
        />

        <div className="card-footer">
          <Link to="recover">
            <Button
              type="button"
              colorScheme="white"
              variant="link"
              fontSize={18}
            >
              Forget your password?
            </Button>
          </Link>
          <button className="btn-login" type="submit">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
