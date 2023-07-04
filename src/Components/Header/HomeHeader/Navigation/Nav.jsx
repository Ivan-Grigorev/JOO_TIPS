import Links from "./Links/Links";
import LogoLink from "./Links/LogoLink";
import { memo } from "react";
import './Nav.scss'

const Navigation = () => {
  return (
    <>
      <LogoLink />

      <nav className="navbar">
        <Links />
      </nav>
    </>
  );
};

export default memo(Navigation);
