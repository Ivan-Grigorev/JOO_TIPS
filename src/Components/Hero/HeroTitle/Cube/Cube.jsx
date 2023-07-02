import { useEffect, useState } from "react";
import bigCube from "./bigCube.svg";
import smallCube from "./smallCube.svg";

import "./Cube.scss";
import { memo } from "react";

const Cube = () => {
  // TODO обязательно поставить медиаправила, вместо этого стейта

  return (
    <>
      <img
        src={smallCube}
        alt="a decoration small/medium cube"
        className="cube mobile-cube"
      />
      <img
        src={bigCube}
        alt="a decoration big cube"
        className="cube large-cube"
      />
    </>
  );
};

export default memo(Cube);
