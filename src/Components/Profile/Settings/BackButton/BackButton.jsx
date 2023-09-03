import PropTypes from "prop-types";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

// Define the BackButton functional component, which represents a navigational button.
const BackButton = ({ currentSectionName, ID }) => {
  const navigate = useNavigate(); // Get the navigate function using the useNavigate hook from React Router.

  // Define the click event handler for the button.
  const onClick = () => navigate(-1); // Navigate back by one step in the history.

  // Render the BackButton component.
  return (
    <div className="back-button" id={ID}>
      <button onClick={onClick}>
        <GoArrowLeft />
        {currentSectionName && (
          <p className="profile-title">{currentSectionName}</p>
        )}
      </button>
    </div>
  );
};

// Define PropTypes to specify the data type for the prop.
BackButton.propTypes = {
  currentSectionName: PropTypes.string, // Prop representing the current section name.
};

export default BackButton; // Export the BackButton component for use in other modules.
