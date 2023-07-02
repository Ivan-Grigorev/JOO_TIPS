import Links from "./Links/Links";
import LogoLink from "./Links/LogoLink";
import { memo } from "react";

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
