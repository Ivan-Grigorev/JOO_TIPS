import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../Layout/Header/Avatar/Avatar";
import BackButton from "../../Settings/BackButton/BackButton";
import AchievementsList from "./AchievementsList/AchivementsList";

import "./Achivements.scss";

const achievements = [
  {
    title: "Новичок",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Капибара",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Отличник",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "HTML и CSS",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Новичок",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Капибара",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Отличник",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "HTML и CSS",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "HTML и CSS",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Новичок ",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Капибара ",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Отличник",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "HTML и CSS",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Гуру Python",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Java Чемпион",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Разбойник",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Профессионал",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "FullStack",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Новичок ",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Капибара ",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
  {
    title: "Отличник",
    image: "https://i.imgur.com/Vq6zHPa.jpg",
  },
];

// Define the Achievements functional component that displays user achievements.
const Achievements = ({ achievementsClass, achievementsRef }) => {
  // Create a state variable to track whether the screen size is large.
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Use the useEffect hook to determine if the screen size is large.
  useEffect(() => {
    const isLarge = window.matchMedia("(min-width: 1024px)").matches;
    setIsLargeScreen(isLarge);
  }, []);

  return (
    <div
      className={`content achievements ${achievementsClass}`} // Apply CSS classes dynamically.
      ref={achievementsRef} // Attach a ref to this component.
    >
      <div className="user-achievements__avatar">
        <Avatar />
      </div>
      <AchievementsList achievements={achievements} />

      {/* Show the BackButton component if the screen is large */}
      {isLargeScreen && <BackButton currentSectionName="Achievements" />}
    </div>
  );
};

// Define PropTypes to specify the data types for the props.
Achievements.propTypes = {
  achievementsClass: PropTypes.string.isRequired, // Class name for styling.
  achievementsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired, // Ref for attaching to this component.
};

export default memo(Achievements); // Export the Achievements component with memoization.
