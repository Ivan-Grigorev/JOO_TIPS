import Avatar from "../Profile/Layout/Header/Avatar/Avatar";
import "./Achivements.scss";

const Achievements = () => {
  const achievements = [
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

  // todo обязательно сделать показатель выполненности условия достижения
  return (
    <>
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
    </>
  );
};

export default Achievements;
