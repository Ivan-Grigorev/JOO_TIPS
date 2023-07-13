import { useState } from "react";
import EmailSVG from "../../Authpage/Forms/icons/EmailSVG";

const Form = () => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("");

  const handleChange = () => {};

  return (
    <>
      <label className="form-field" htmlFor="email">
        <EmailSVG />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={password}
          required
        />
      </label>
      <label className="form-field" htmlFor="email">
        <EmailSVG />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={confirmedPassword}
          required
        />
      </label>
    </>
  );
};

export default Form;
