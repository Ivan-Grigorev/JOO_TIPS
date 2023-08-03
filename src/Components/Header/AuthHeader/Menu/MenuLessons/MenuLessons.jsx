import { MenuDivider, MenuGroup, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuLessons = () => {
  return (
    <>
      <MenuGroup title="Навчання">

        <MenuItem>
          <Link to={"/themes"}>Теми</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/lessons"}>Уроки</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/results"}>Результати</Link>
        </MenuItem>
      </MenuGroup>

      <MenuDivider />
    </>
  );
};

export default MenuLessons;
