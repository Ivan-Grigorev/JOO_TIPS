import { MenuDivider, MenuGroup, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuLessons = () => {
  return (
    <>
      <MenuGroup title="Навчання">

        <MenuItem>
          <Link to={"/education/topics"}>Теми</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/education/lessons"}>Уроки</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/education/results"}>Результати</Link>
        </MenuItem>
      </MenuGroup>

      <MenuDivider />
    </>
  );
};

export default MenuLessons;
