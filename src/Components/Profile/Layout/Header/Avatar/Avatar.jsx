import { useSelector } from "react-redux";
import { selectUserAvatar } from "../../../../../redux/auth/auth-selectors";
import { RxAvatar } from "react-icons/rx";
import "./Avatar.scss";

const Avatar = () => {
  const userAvatar = useSelector(selectUserAvatar);

  return (
    <>
      {userAvatar ? (
        <img src={userAvatar} alt="user" className="user-avatar" />
      ) : (
        <RxAvatar className="user-avatar" />
      )}
    </>
  );
};

export default Avatar;
