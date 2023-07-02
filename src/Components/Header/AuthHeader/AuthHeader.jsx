import LogoLink from "../HomeHeader/Navigation/Links/LogoLink";
import { RxAvatar } from "react-icons/rx";
import "./AuthHeader.scss";

export default function AuthHeader() {
  return (
    <>
        <div className="avatar-container">
          <RxAvatar className="user-avatar" />
        </div>
    </>
  );
}
