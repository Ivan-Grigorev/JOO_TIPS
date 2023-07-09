import notFoundIMG from "./images/404_image.svg";
import vector3 from "./images/vector_3.svg";
import "./error_view.css";
import LogoLink from "../Header/HomeHeader/Navigation/Links/LogoLink";

const NotFound = () => {
  return (
    <div className="error-body">
      <img className="vector-1-image" src={vector3} alt="404 error" />
      <header className="error-header">
        <LogoLink />
      </header>
      <h1>
        <span>Oops...</span> Error 404...
      </h1>
      <img className="error-image" src={notFoundIMG} alt="404 error" />
    </div>
  );
};

export default NotFound;
