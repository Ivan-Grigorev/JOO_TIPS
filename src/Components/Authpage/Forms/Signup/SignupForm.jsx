import SignupFormFields from "./SignupFormFields/SignupFormFields";
import { register } from "../../../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectUserErrors } from "../../../../redux/auth/auth-selectors";

const SignupForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { signup } = useSelector(selectUserErrors); // errors

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "confirmed-password":
        return setConfirmedPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    // dont need a navigate to homepage, because authpage is a restricted route (see App.jsx)
  };

  return (
    <form method="POST" onSubmit={handleSubmit} id="signup-form">
      <div className="card-title">
        <p>Sign up</p>
      </div>

      <SignupFormFields
        handleChange={handleChange}
        nameValue={name}
        emailValue={email}
        password={password}
        confirmPasswordValue={confirmedPassword}
        errors={signup}
      />

      <div>
        <button className="btn-signup">Sign up</button>
      </div>
    </form>
  );
};

export default SignupForm;
