import { useNavigate } from "react-router-dom";
import "../../../Pages/RecoveringPassword/RecoveringPassword.scss";
import { useEffect } from "react";

// This component is used to display a message to the user after they have successfully changed their password
const PasswordHasBeenChanged = () => {
  // The useNavigate hook provides easy navigation between the routes in a React Router application
  const navigate = useNavigate();

  useEffect(() => {
    // Using setTimeout to navigate the user to the signup page after 5 seconds
    setTimeout(() => navigate("/signup#login"), 5000);
  });

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

        <button type="button" className="button">
          Вiйти в акаунт
        </button>
      </div>
    </>
  );
};

export default PasswordHasBeenChanged;
