import { RxAvatar } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from "../../../redux/auth/auth-selectors";
import "./AuthHeader.scss";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/auth-operations";
import { useEffect } from "react";
import { getUserSubscriptionTime } from "../../../redux/subscription/subscription-operations";
import { selectRemainingTime } from "../../../redux/subscription/subscription-selectors";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const AuthHeader = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const userEmail = useSelector(selectUserEmail);
  const remainingTime = useSelector(selectRemainingTime);

  // console.log(Number(remainingTime.remainingTime) / 3600000);

  useEffect(() => {
    loggedIn && dispatch(getUserSubscriptionTime({ email: userEmail }));

    // todo возможно убрать вообще зависимости
  }, [loggedIn, dispatch, userEmail]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="account-menu">
        {userAvatar ? (
          <img src={userAvatar} alt="your avatar" className="user-avatar" />
        ) : (
          <RxAvatar className="user-avatar" />
        )}

        <Menu>
          <MenuButton
            as={Button}
            width="100px"
            colorScheme="#123054"
            color="#fcbc7d"
            border="1px"
            borderColor="#fcbc7d"
            _hover={{ bg: "#fcbc7d", color: "#123054" }}
          >
            <Div>
              {username} <BsChevronDown />
            </Div>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Профiль">
              <MenuItem>Мiй профiль</MenuItem>
              <MenuItem>Налаштування</MenuItem>
              <MenuItem onClick={handleLogOut}>Вийти</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuGroup title="Пiдписка">
              <MenuItem>Перейти на премiум пiдписку!</MenuItem>
              {remainingTime !== null && (
                <MenuItem>
                  Ваша пiдписка триватиме ще{" "}
                  {Math.floor(Number(remainingTime.remainingTime / 3600000))}{" "}
                  часи
                </MenuItem>
              )}
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};
export default AuthHeader;
