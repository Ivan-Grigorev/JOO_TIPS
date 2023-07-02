import { useEffect, useState } from "react";
import arrow from "./MobileArrow.svg";
import "./MobileArrow.css";

export default function MobileArrow() {

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

  const mobileScreen = windowWidth < 768;

  return (
    mobileScreen && (
      <img src={arrow} alt="decoration arrow" className="mobileArrow" />
    )
  );
}
