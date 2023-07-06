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
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from "../../../redux/auth/auth-selectors";
import "./AuthHeader.scss";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/auth-operations";
import {
  getSubscriptionDetails,
  resetSubscription,
} from "../../../redux/subscription/subscription-operations";
import {
  selectAccountType,
  selectIsPremium,
  selectRemainingTime,
} from "../../../redux/subscription/subscription-selectors";
import { useEffect } from "react";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const AuthHeader = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const userEmail = useSelector(selectUserEmail);

  const isPremium = useSelector(selectIsPremium);
  const remainingTime = useSelector(selectRemainingTime);
  const subscriptionType = useSelector(selectAccountType);

  const onMenuOpen = () => {
    dispatch(getSubscriptionDetails({ email: userEmail }));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  // add premium border to avatar
  useEffect(() => {
    isPremium &&
      document.querySelector(".user-avatar").classList.add("premium-avatar");
  });
  // reset subscription
  useEffect(() => {
    if (remainingTime !== null && remainingTime <= 0) {
      alert("Subscription must be dropped.");
    }

    // set interval if user has a subscription
    isPremium &&
      setInterval(() => {
        if (remainingTime <= 0) {
          dispatch(resetSubscription({ subscriptionType }));
          alert("Subscription is dropped.");
        }
      }, 3600000); // 1 hour interval
  });

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
            onClick={onMenuOpen}
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
              {isPremium && remainingTime !== null ? (
                <>
                  <MenuItem>
                    Ваша пiдписка триватиме ще{" "}
                    {Math.floor(Number(remainingTime / 3600000))} часи
                  </MenuItem>
                </>
              ) : (
                <MenuItem>Перейти на премiум пiдписку!</MenuItem>
              )}
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};
export default AuthHeader;
