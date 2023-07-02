import SingupFormFields from "./SignupFormFields/SignupFormFields";
import { register } from "../../../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    setName(""); // reset
    setEmail(""); // reset
    setPassword(""); // reset

    setTimeout(() => navigate("/"), 500);
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="card-title">
        <p>Sign up</p>
      </div>

      <SingupFormFields
        handleChange={handleChange}
        nameValue={name}
        emailValue={email}
        password={password}
        confirmPasswordValue={confirmedPassword}
      />

      <div>
        <button className="btn-signup">Sign up</button>
      </div>
    </form>
  );
};

export default SignupForm;
