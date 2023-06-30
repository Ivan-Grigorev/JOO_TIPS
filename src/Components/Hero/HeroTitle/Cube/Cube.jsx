import { useEffect, useState } from "react";
import bigCube from "./bigCube.svg";
import smallCube from "./smallCube.svg";

import "./Cube.scss";

export default function Cube() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = windowWidth >= 1320;

  return (
    <>
      {!isLargeScreen ? (
        <img
          src={smallCube}
          alt="a decoration small/medium cube"
          className="cube mobile-cube"
        />
      ) : (
        <img
          src={bigCube}
          alt="a decoration big cube"
          className="cube large-cube"
        />
      )}
    </>
  );
}
