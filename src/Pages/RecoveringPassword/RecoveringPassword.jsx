import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import "./RecoveringPassword.scss";
import "../../Pages/AuthPage/styles.scss";
import EmailSVG from "../../Components/Authpage/Forms/icons/EmailSVG";
import { useDispatch, useSelector } from "react-redux";
import { selectUserErrors } from "../../redux/auth/auth-selectors";
import { resetUserPassword } from "../../redux/auth/auth-operations";
import { useEffect, useState } from "react";

const RecoveringPassword = () => {
  const [email, setEmail] = useState("");
  const errors = useSelector(selectUserErrors).resetPassword;
  const dispatch = useDispatch();

  useEffect(() => {
    const messages = document.querySelector(".auth .recover-hero .message");
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);

    errors.length > 0 ? show() : hide();
  });

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    dispatch(resetUserPassword({ email }));
  };

  const handleChange = async (e) => setEmail(e.target.value);

  return (
    <>
      <div className="auth">
        <header className="recover-header">
          <LogoLink />
        </header>

        <main className="recover-hero">
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
                required
              />
            </label>
            <div className="message">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>

            <button
              type="button"
              onClick={handleRecoverPassword}
              className="button"
            >
              Вiдновити
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default RecoveringPassword;
