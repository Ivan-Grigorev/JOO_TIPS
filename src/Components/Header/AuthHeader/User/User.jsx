import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import "./User.scss";

const User = async () => {
  const userAvatar = null;
  const dispatch = useDispatch();


  return (
    <>
      <div>
        {userAvatar ? (
          <img src={userAvatar} alt="user avatar" className="user-avatar" />
        ) : (
          <RxAvatar className="user-avatar" />
        )}
      </div>
    </>
  );
};

export default User;
