import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isTokenExpired,
  setNewPassword,
} from "../../../redux/auth/auth-operations";
import { selectRestorePasswordToken } from "../../../redux/auth/auth-selectors";
import { useNavigate, useParams } from "react-router-dom";

import "../RecoveringPassword.scss";
import "../../../Pages/AuthPage/styles.scss";
import Form from "../../../Components/RecoveringPage/SetNewPassword/Form";
import LogoLink from "../../../Components/Header/HomeHeader/Navigation/Links/LogoLink";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "password":
        setPassword(value);
        break;
      case "confirmedPassword":
        setConfirmedPassword(value);
        break;
      default:
        break;
    }
  };

  const isTokenFresh = useSelector(selectRestorePasswordToken);

  useEffect(() => {
    dispatch(isTokenExpired({ token }));
  }, [token, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setNewPassword({ token, password, confirmedPassword })).then(() =>
      navigate("/signup")
    );
  };

  return (
    <>
      <div className="auth recover-setNewPassword">
        <header className="recover-header">
          <LogoLink />
        </header>

        <main>
          {isTokenFresh === true ? (
            <>
              <Form
                password={password}
                confirmedPassword={confirmedPassword}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </>
          ) : (
            <div>Sorry bro</div>
          )}
        </main>
      </div>
    </>
  );
};

export default SetNewPassword;
