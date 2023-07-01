import "./styles.scss";
import CardWrap from "../../Components/Authpage/CardWrap/CardWrap";
import Switcher from "../../Components/Authpage/Switcher/Switcher";

export default function SignupLogin() {
  return (
    <>
      <div className="signup-login">
        <Switcher />

        <CardWrap />
      </div>
    </>
  );
}
