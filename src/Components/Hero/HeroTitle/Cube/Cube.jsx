import mobileCube from "./cube-w380px.png";
import tabletCube from "./cube-w768px.png";
import desktopCube from "./cube-w1440px.png";

import "./Cube.scss";
import { memo } from "react";

const Cube = () => {
  // TODO обязательно поставить медиаправила, вместо этого стейта

  return (
    <>
      <img
        src={mobileCube}
        alt="a mobile cube"
        className="cube mobile-cube"
        loading="lazy"
      />

      <img
        src={tabletCube}
        alt="a tablet cube"
        className="cube tablet-cube"
        loading="lazy"
      />

      <img
        src={desktopCube}
        alt="a big cube"
        className="cube desktop-cube"
        loading="lazy"
      />
    </>
  );
};

export default memo(Cube);
