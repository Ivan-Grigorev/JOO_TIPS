import EmailSVG from "../../../Authpage/Forms/icons/EmailSVG";
import ErrorMessages from "../../../Errors/ErrorMessages";
import PropTypes from "prop-types";

const Hero = ({ email, errors, handleChange, handleRecoverPassword }) => {
  return (
    <>
      <div className="recover-card">
        <h1>Вiдновити пароль</h1>
        <p>
          Щоб відновити пароль впиши свій E-mail, на який прийде письмо для
          відновлення паролю
        </p>

        <label className="form-field" htmlFor="email">
          <EmailSVG />
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={email}
            title="Your email address"
            required
          />
        </label>

        <ErrorMessages parentClass={".auth .recover-hero"} errors={errors} />

        <button
          type="button"
          onClick={handleRecoverPassword}
          className="button"
        >
          Вiдновити
        </button>
      </div>
    </>
  );
};

Hero.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRecoverPassword: PropTypes.func.isRequired,
};

export default Hero;
