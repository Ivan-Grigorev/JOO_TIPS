import { useSelector } from "react-redux";
import { selectUserAvatar } from "../../../../../redux/auth/auth-selectors";
import { RxAvatar } from "react-icons/rx";
import "./Avatar.scss";

const Avatar = ({ w, h }) => {
  const userAvatar = useSelector(selectUserAvatar);

  return (
    <>
      {userAvatar ? (
        <img
          src={userAvatar}
          alt="user"
          className="user-avatar"
          width={w}
          height={h}
        />
      ) : (
        <RxAvatar className="user-avatar" width={w} height={h} />
      )}
    </>
  );
};

export default Avatar;
