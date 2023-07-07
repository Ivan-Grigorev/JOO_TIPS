import { BsChevronDown } from "react-icons/bs";
import {
  // Importing necessary components from Chakra UI
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

// Styled component using styled-components
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

  // Get data from Redux state
  const isPremium = useSelector(selectIsPremium);
  const remainingTime = useSelector(selectRemainingTime);
  const subscriptionType = useSelector(selectAccountType);

  // Add class to user avatar based on subscription type
  useEffect(() => {
    dispatch(getSubscriptionDetails({ email: userEmail }));

    isPremium
      ? document.querySelector(".user-avatar").classList.add("premium-avatar")
      : document
          .querySelector(".user-avatar")
          .classList.remove("premium-avatar");
  }, [dispatch, isPremium, userEmail]);

  // Reset subscription when time expires
  useEffect(() => {
    if (remainingTime !== null && remainingTime <= 0)
      dispatch(resetSubscription({ subscriptionType }));
  });

  const onMenuOpen = () => {
    dispatch(getSubscriptionDetails({ email: userEmail }));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  // Function to calculate remaining subscription time
  const getSubscriptionTime = (ms) => {
    const days = `${Math.floor(ms / 86400000)} day(s)`;
    const hours = `${Math.floor((ms % 86400000) / 3600000)} hour(s)`;
    const minutes = `${Math.floor(ms / 60000)} minute(s)`;

    if (days === "0 day(s)" && hours === "0 hour(s)") return `Subscription time: ${minutes}`; // prettier-ignore

    if (days === "0 day(s)") return `Subscription time: ${hours}`;

    return `Subscription time: ${days} ${hours}`;
  };

  const handleUpdateSubscription = () => {
    // Update subscription
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

            <MenuGroup title="Subscription">
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
                  Upgrade to Premium!
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
