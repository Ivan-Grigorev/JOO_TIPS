import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "../../../redux/auth/auth-operations";
import { selectRestorePasswordToken } from "../../../redux/auth/auth-selectors";
import { useParams } from "react-router-dom";

import "../RecoveringPassword.scss";
import "../../../Pages/AuthPage/styles.scss";
import Form from "../../../Components/RecoveringPage/SetNewPassword/Form";
import LogoLink from "../../../Components/Header/HomeHeader/Navigation/Links/LogoLink";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const isTokenFresh = useSelector(selectRestorePasswordToken);

  useEffect(() => {
    dispatch(isTokenExpired(token));
  }, [token, dispatch]);

  return (
    <>
      <div className="auth recover-setNewPassword">
        <header className="recover-header">
          <LogoLink />
        </header>

        <main>
          {isTokenFresh === true ? (
            <>
              <Form />
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
