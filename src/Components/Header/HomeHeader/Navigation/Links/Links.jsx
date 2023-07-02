import { memo } from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to="#who-we-are">Про нас</Link>
      <Link to="#start-learning">Розпочати навчання</Link>
      <Link to="#for-schools">Для школи</Link>
      <Link to="#for-teams">Для команди</Link>
    </>
  );
};
export default memo(Links);
