import { useSelector } from "react-redux";
import "./UpdateAvatar.scss";
import { RxAvatar } from "react-icons/rx";
import { selectUserAvatar } from "../../../../redux/auth/auth-selectors";

const UpdateAvatar = () => {
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

export default UpdateAvatar;
