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
  selectUserName,
} from "../../../redux/auth/auth-selectors";
import "./AuthHeader.scss";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import logout from '../../../'
import { logOut } from "../../../redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default function AuthHeader() {
  const username = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());

    setTimeout(() => navigation("/"), 500);
  };

  return (
    <>
      <div className="account-menu">
        <RxAvatar className="user-avatar" />
        {/* {userAvatar ? (
          <img src={userAvatar} alt="your avatar" />
        ) : (
          <RxAvatar className="user-avatar" />
        )} */}

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
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
