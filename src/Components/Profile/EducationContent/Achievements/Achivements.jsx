import { memo, useEffect, useState } from "react";
import Avatar from "../../Layout/Header/Avatar/Avatar";
import BackButton from "../../Settings/BackButton/BackButton";

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

const Achievements = ({ achievementsClass, achievementsRef }) => {
  // Create a state variable to track active content
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const isLarge = window.matchMedia("(min-width: 1024px)").matches;
    setIsLargeScreen(isLarge);
  }, []);

  // todo обязательно сделать показатель выполненности условия достижения
  return (
    <div
      className={`content achievements ${achievementsClass}`}
      ref={achievementsRef}
    >
      <div className="user-achievements__avatar">
        <Avatar />
      </div>

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

      {isLargeScreen && (
        <BackButton
          backLink={"/education/topics"}
          currentSectionName={"Achievements"}
        />
      )}
    </div>
  );
};

export default memo(Achievements);
