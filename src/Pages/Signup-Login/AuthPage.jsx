import "./styles.scss";
import CardWrap from "../../Components/Authpage/CardWrap/CardWrap";
import Switcher from "../../Components/Authpage/Switcher/Switcher";
import LogoLink from "../../Components/Header/HomeHeader/Navigation/Links/LogoLink";

export default function AuthPage() {
  return (
    <>
      <div className="signup-login">
        <LogoLink  />

        <Switcher />

        <CardWrap />
      </div>
    </>
  );
}
