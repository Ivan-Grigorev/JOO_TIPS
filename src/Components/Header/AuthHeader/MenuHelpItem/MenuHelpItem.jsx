import { MenuGroup, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuHelpItem = () => {
  return (
    <>
      <MenuGroup title="Help">
        <MenuItem>
          <Link to={"/FAQ"}>FAQ</Link>
        </MenuItem>
      </MenuGroup>
    </>
  );
};

export default MenuHelpItem;
