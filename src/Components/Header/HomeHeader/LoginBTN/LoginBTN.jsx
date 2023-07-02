import { Link } from "react-router-dom/dist";

import "./LoginBtn.scss";

import { memo } from "react";

const LoginBTN = () => {
  return (
    <>
      <Link to="/signup">
        <button
          className="btn-login"
          // onClick={handleLogIn}
        >
          Вхiд
        </button>
      </Link>
    </>
  );
};

export default memo(LoginBTN);
