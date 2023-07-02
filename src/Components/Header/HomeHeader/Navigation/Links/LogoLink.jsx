import { Link } from "react-router-dom";
import logo from "./logo.svg";

const LogoLink = () => {
  return (
    <Link to="/" className="logo-header">
      <img src={logo} alt="logo" />
    </Link>
  );
};
export default LogoLink;
