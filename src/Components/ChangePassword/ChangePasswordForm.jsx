import PasswordSVG from "../Authpage/Forms/icons/PasswordSVG";
import ErrorMessages from "../Errors/ErrorMessages";

const ChangePasswordForm = ({
  currentPassword,
  newPassword,
  confirmedNewPassword,
  handleChange,
  handleSubmit,
  parentClass,
  errors,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Enter your new password</h1>

        <label className="form-field" htmlFor="currentPassword">
          <PasswordSVG />
          <input
            name="currentPassword"
            placeholder="Enter your current password"
            type="password"
            onChange={handleChange}
            value={currentPassword}
            title="Enter your current password"
            required
          />
        </label>

        <label className="form-field" htmlFor="newPassword">
          <PasswordSVG />
          <input
            name="newPassword"
            placeholder="Enter a new password"
            type="password"
            onChange={handleChange}
            value={newPassword}
            title="Enter a new password"
            required
          />
        </label>

        <label className="form-field" htmlFor="confirmedPassword">
          <PasswordSVG />
          <input
            name="confirmedNewPassword"
            placeholder="Confirm your new password"
            type="password"
            onChange={handleChange}
            value={confirmedNewPassword}
            required
            title="Confirm your new password"
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

export default ChangePasswordForm;
