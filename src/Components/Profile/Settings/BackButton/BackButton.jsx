import { GoArrowLeft } from "react-icons/go";
import "./BackButton.scss";
import { Link } from "react-router-dom";

const BackButton = ({ backLink, currentSectionName }) => {
  return (
    <div className="back-button">
      <Link to={backLink}>
        <GoArrowLeft />
        <p className="profile-title">{currentSectionName}</p>
      </Link>
    </div>
  );
};

export default BackButton;
