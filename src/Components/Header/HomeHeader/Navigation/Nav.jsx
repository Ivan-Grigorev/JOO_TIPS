import Links from "./Links/Links";
import LogoLink from "./Links/LogoLink";

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

export default Navigation;
