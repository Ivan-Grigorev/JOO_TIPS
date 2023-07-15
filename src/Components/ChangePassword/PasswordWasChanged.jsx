import { useNavigate } from "react-router-dom";

// This component is used to display a message to the user after they have successfully changed their password
const PasswordWasChanged = () => {
  // The useNavigate hook provides easy navigation between the routes in a React Router application
  const navigate = useNavigate();

  const onButtonClick = () => navigate("/profile");

  return (
    <>
      <div className="pass-has-been-changed">
        <h1>Успішно!</h1>
        <p>
          Ваш пароль було успішно змінено. Будь ласка, використовуйте новий
          пароль для наступного входу в систему.
        </p>
        <p>
          Ми рекомендуємо зберегти ваш новий пароль в безпечному місці. З
          міркувань безпеки, не діліться своїм паролем з іншими.
        </p>
        <p>
          Якщо у вас виникнуть які-небудь питання або проблеми, будь ласка,
          зв'яжіться з нами за адресою support@example.com.
        </p>
        <p>
          З повагою, <br /> Команда підтримки JooTips
        </p>

        <button type="button" className="button" onClick={onButtonClick}>
          OK
        </button>
      </div>
    </>
  );
};

export default PasswordWasChanged;
