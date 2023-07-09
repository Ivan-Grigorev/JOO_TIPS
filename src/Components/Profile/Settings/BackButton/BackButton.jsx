import { GoArrowLeft } from "react-icons/go";
import "./BackButton.scss";
import { Link } from "react-router-dom";

const BackButton = ({ currentSectionName }) => {
  return (
    <div className="back-button">
      <Link to={null}>
        <GoArrowLeft />
      </Link>
      <p className="profile-title">{currentSectionName}</p>
    </div>
  );
};

export default BackButton;
