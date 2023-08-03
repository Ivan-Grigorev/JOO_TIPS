import { Link } from "react-router-dom";
import logo from "./logo.svg";

const LogoLink = ({ width, height }) => {
  return (
    <Link to="/" className="logo-header">
      <img src={logo} alt="logo" width={width} height={height} />
    </Link>
  );
};
export default LogoLink;
