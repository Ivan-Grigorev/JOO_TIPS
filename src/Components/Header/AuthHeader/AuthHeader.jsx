import LogoLink from "../HomeHeader/Navigation/Links/LogoLink";
import { RxAvatar } from "react-icons/rx";
import "./AuthHeader.scss";

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
import { selectUserName } from "../../../redux/auth/auth-selectors";

export default function AuthHeader() {
  const username = useSelector(selectUserName);

  return (
    <>
      <div className="avatar-container">
        <Menu>
          <MenuButton as={Button} colorScheme="pink">
            {username}
            {/* <RxAvatar className="user-avatar" /> */}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
