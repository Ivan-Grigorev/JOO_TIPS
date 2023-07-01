import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <NavLink to="#who-we-are">Про нас</NavLink>
      <NavLink to="#start-learning">Розпочати навчання</NavLink>
      <NavLink to="#for-schools">Для школи</NavLink>
      <NavLink to="#for-teams">Для команди</NavLink>
    </>
  );
};
export default Links;
