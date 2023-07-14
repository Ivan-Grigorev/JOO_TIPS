import EmailSVG from "../../Authpage/Forms/icons/EmailSVG";
import ErrorMessages from "../../Errors/ErrorMessages";

// This component renders a form where the user can enter and confirm their new password
const Form = ({
  password,
  confirmedPassword,
  handleChange,
  handleSubmit,
  parentClass,
  errors,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Enter your new password</h1>
        <label className="form-field" htmlFor="password">
          <EmailSVG />
          <input
            name="password"
            placeholder="Enter a new password"
            type="password"
            onChange={handleChange}
            value={password}
            required
          />
        </label>
        <label className="form-field" htmlFor="confirmedPassword">
          <EmailSVG />
          <input
            name="confirmedPassword"
            placeholder="Confirm your password"
            type="password"
            onChange={handleChange}
            value={confirmedPassword}
            required
          />
        </label>

        <ErrorMessages parentClass={parentClass} errors={errors} />

        <button type="submit" className="button">
          Recover password
        </button>
      </form>
    </>
  );
};

export default Form;
