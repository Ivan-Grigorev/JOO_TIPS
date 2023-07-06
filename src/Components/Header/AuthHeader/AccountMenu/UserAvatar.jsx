import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectUserAvatar } from "../../../../redux/auth/auth-selectors";

const UserAvatar = () => {
  const userAvatar = useSelector(selectUserAvatar);

  return (
    <>
      {userAvatar ? (
        <img src={userAvatar} alt="your avatar" className="user-avatar" />
      ) : (
        <RxAvatar className="user-avatar" />
      )}
    </>
  );
};
export default UserAvatar;
