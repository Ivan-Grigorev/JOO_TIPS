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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
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
  updateSubscription,
} from "../../../redux/subscription/subscription-operations";
import {
  selectAccountType,
  selectIsPremium,
  selectRemainingTime,
} from "../../../redux/subscription/subscription-selectors";
import { useEffect } from "react";
import UserAvatar from "./AccountMenu/UserAvatar";
import MenuDeleteAccountItem from "./MenuDeleteAccountItem/MenuDeleteAccountItem";
import MenuHelpItem from "./MenuHelpItem/MenuHelpItem";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const AuthHeader = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const isPremium = useSelector(selectIsPremium);
  const remainingTime = useSelector(selectRemainingTime);
  const subscriptionType = useSelector(selectAccountType);

  // add premium border to avatar, get subscription details
  useEffect(() => {
    dispatch(getSubscriptionDetails({ email: userEmail }));

    isPremium
      ? document.querySelector(".user-avatar").classList.add("premium-avatar")
      : document
          .querySelector(".user-avatar")
          .classList.remove("premium-avatar");
  }, [dispatch, isPremium, userEmail]);

  // reset subscription
  useEffect(() => {
    if (remainingTime !== null && remainingTime <= 0) dispatch(resetSubscription({ subscriptionType })); // prettier-ignore
  });

  const onMenuOpen = () => {
    dispatch(getSubscriptionDetails({ email: userEmail }));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  // count remaining time for subscription
  const getSubscriptionTime = (ms) => {
    let days = `${Math.floor(ms / 86400000)} day(s)`;
    const hours = `${Math.floor((ms % 86400000) / 3600000)} hour(s)`;

    if (days === "0 day(s)") days = "";

    return `Subscription time: ${days} ${hours} `;
  };

  // update subscription
  const handleUpdateSubscription = () => {
    const updatedSubscription = {
      email: userEmail,
      subscription: {
        type: "School",
        isPremium: true,
        expired: { startDate: 123456, endDate: 1 },
      },
    };

    dispatch(updateSubscription(updatedSubscription));
  };

  return (
    <>
      <div className="account-menu">
        <UserAvatar />
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

              <MenuDeleteAccountItem />
            </MenuGroup>
            <MenuDivider />

            <MenuHelpItem />

            <MenuGroup title="Пiдписка">
              {isPremium && remainingTime !== null ? (
                <>
                  <MenuItem>{getSubscriptionTime(remainingTime)}</MenuItem>
                  <MenuItem
                    onClick={() =>
                      dispatch(resetSubscription({ subscriptionType }))
                    }
                  >
                    Reset subscription
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleUpdateSubscription}>
                  Перейти на премiум пiдписку!
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
