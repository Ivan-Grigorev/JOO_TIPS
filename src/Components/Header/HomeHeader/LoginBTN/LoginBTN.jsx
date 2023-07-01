import { useNavigate } from "react-router-dom/dist";

import "./LoginBtn.scss";

const LoginBTN = () => {
  const navigation = useNavigate();

  const handleLogIn = () => navigation("/registration");

  return (
    <>
      <button className="btn-login" onClick={handleLogIn}>
        Вхiд
      </button>
    </>
  );
};

export default LoginBTN;
