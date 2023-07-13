import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "../../../redux/auth/auth-operations";
import { selectRestorePasswordToken } from "../../../redux/auth/auth-selectors";
import { useParams } from "react-router-dom";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const isTokenFresh = useSelector(selectRestorePasswordToken);
  console.log(`Is token fresh? - - - ${isTokenFresh}`);

  useEffect(() => {
    dispatch(isTokenExpired(token));
  }, [token, dispatch]);

  return (
    <>
      <div className="auth">
        <header>
          <main>
            {isTokenFresh === true ? "YES BLYAT" : <div>Sorry bro</div>}
          </main>
        </header>
      </div>
    </>
  );
};

export default SetNewPassword;
