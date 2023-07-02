import "./Title.scss";

import { memo } from "react";

const Title = memo(() => {

  return (
    <>
      <div className="textBlock">
        <h1>
          <span>IT</span> - ПРОФЕСІЯ
        </h1>
        <h2>для школярiв та дорослих </h2>
        <h3>
          Тебе чекають сотні карточок-підсказок, тисячі різноманітних тестів,
          уроки від 5 до 30 хвилин в зручний для тебе час і звичайно всілякі
          штуки з ігрового світу.
        </h3>
      </div>
    </>
  );
});

export default Title;
