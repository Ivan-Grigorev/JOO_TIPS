import PropTypes from "prop-types";

// Define the AchievementsList functional component that displays a list of achievements.
const AchievementsList = ({ achievements }) => {
  return (
    <div className="user-achievements">
      <ul className="user-achievements__list">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <img src={achievement.image} alt={achievement.title} />
            <p>{achievement.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes to specify the data type for the prop.
AchievementsList.propTypes = {
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // Each achievement should have a title of type string.
      image: PropTypes.string.isRequired, // Each achievement should have an image URL of type string.
    })
  ).isRequired, // The achievements prop is required.
};

export default AchievementsList; // Export the AchievementsList component for use in other modules.
