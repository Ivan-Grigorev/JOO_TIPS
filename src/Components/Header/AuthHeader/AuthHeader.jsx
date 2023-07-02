import { RxAvatar } from "react-icons/rx";
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
  selectUserName,
} from "../../../redux/auth/auth-selectors";
import "./AuthHeader.scss";

export default function AuthHeader() {
  const username = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  console.log(userAvatar);
  return (
    <>
      <div className="account-menu">
        {userAvatar ? (
          <img src={userAvatar} alt="your avatar" />
        ) : (
          <RxAvatar className="user-avatar" />
        )}

        <Menu>
          <MenuButton as={Button} colorScheme="pink">
            {username}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Профiль">
              <MenuItem>Мiй профiль</MenuItem>
              <MenuItem>Налаштування</MenuItem>
              <MenuItem>Вийти</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
