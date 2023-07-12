import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";
import "./RecoveringPassword.scss";
import "../../Pages/AuthPage/styles.scss";
import EmailSVG from "../../Components/Authpage/Forms/icons/EmailSVG";

const RecoveringPassword = () => {
  const handleRecoverPassword = () => {
    console.log("Recovering password");
  };

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

            <label className="form-field name" htmlFor="email">
              <EmailSVG />
              <input
                name="email"
                placeholder="Email"
                type="email"
                // onChange={handleChange}
                // value={emailValue}
                required
              />
            </label>

            <button type="button" onClick={handleRecoverPassword} className="button">
              Вiдновити
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default RecoveringPassword;
