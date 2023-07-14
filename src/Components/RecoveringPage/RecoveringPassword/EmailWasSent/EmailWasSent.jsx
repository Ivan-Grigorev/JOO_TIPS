import { useNavigate } from "react-router-dom";

const EmailWasSent = () => {
  const navigate = useNavigate();

  const handleRelocate = () => navigate("/");
  
  return (
    <div className="email-was-sent">
      <h1>Шановний користувач,</h1>
      <p>
        Ми щойно
        <span> відправили вам на пошту інструкції щодо скидання пароля</span>.
        Будь ласка, перевірте свою електронну пошту та дотримуйтесь вказаних
        кроків, щоб встановити новий пароль.
      </p>
      <p>
        Посилання для зміни пароля дійсне <span>протягом 1 години</span>. Якщо
        ви не запитували зміну пароля або посилання застаріло, будь ласка,
        розпочніть процес відновлення заново на нашому сайті.
      </p>
      <p>
        Будь ласка, переконайтеся, що ви перевірили папку "Спам", якщо лист не
        надійшов у основну скриньку.
      </p>
      <p>
        Якщо у вас виникнуть які-небудь питання чи проблеми, не соромтеся
        звертатися до нас за адресою <span>support@example.com</span>.
      </p>
      <p>
        З повагою, <br /> <span>Команда підтримки JooTips</span>
      </p>

      <button type="button" className="button" onClick={handleRelocate}>
        OK
      </button>
    </div>
  );
};

export default EmailWasSent;
