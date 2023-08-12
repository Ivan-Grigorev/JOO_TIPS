import { Fragment, Suspense, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Импортируйте необходимые компоненты
import ChakraSpinner from "../../ChakraUI/Spinner/Spinner";
import EducationFooter from "./EducationFooter/EducationFooter";
import EducationHeader from "./EducationHeader/EducationHeader";
import Topics from "../EducationContent/Topics/Topics";
import Lessons from "../EducationContent/Lessons/Lessons";
import Results from "../EducationContent/Results/Results";
import Sidebar from "./Sidebar/Sidebar";
import Competition from "../EducationContent/Competition/Competition";
import Examinations from "../EducationContent/Examinations/Examinations";
import Matches from "../EducationContent/Matches/Matches";
import Ratings from "../EducationContent/Ratings/Ratings";
import Achievements from "../../Achievements/Achivements";
import { useRef } from "react";

const EducationLayout = () => {
  const contentOrder = [
    "Achievements",
    "Topics",
    "Lessons",
    "Competitions",
    "Results",
  ];
  const nodeRef = useRef(null); // Создайте реф

  const [activeEducationContentIndex, setActiveEducationContentIndex] =
    useState(1); // set Topics as default content

  const handleSwipe = (direction) => {
    let nextIndex;
    const leftSwipe = direction === "LEFT";
    const rightSwipe = direction === "RIGHT";

    if (leftSwipe) {
      nextIndex = (activeEducationContentIndex + 1) % contentOrder.length;
    }
    if (rightSwipe) {
      nextIndex =
        (activeEducationContentIndex - 1 + contentOrder.length) %
        contentOrder.length;
    }

    // Проверка на крайние элементы
    if (nextIndex >= 0 && nextIndex < contentOrder.length) {
      // Если текущий контент - первый, и происходит свайп вправо
      const swipeRightWhenFirst = activeEducationContentIndex === 0 && rightSwipe; // prettier-ignore
      // Если текущий контент - последний, и происходит свайп влево
      const swipeLeftWhenLast = activeEducationContentIndex === contentOrder.length - 1 && leftSwipe; // prettier-ignore

      // Не меняем контент, если пытаемся выйти за пределы крайних элементов
      if (swipeRightWhenFirst || swipeLeftWhenLast) return;

      setActiveEducationContentIndex(nextIndex);
      window.scrollTo(0, 0);
    }
  };

  const handleButtonClick = (contentKey) => {
    const newIndex = contentOrder.indexOf(contentKey);
    setActiveEducationContentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  const activeEducationContent = contentOrder[activeEducationContentIndex];
  const achievementsHero =
    activeEducationContentIndex === 0 ? "achievements-hero" : "";

  return (
    <>
      <EducationHeader activeContent={activeEducationContent} />

      <main
        className={`profile-hero education-hero ${achievementsHero}`}
        {...handlers}
      >
        {/* <TransitionGroup>
          <CSSTransition
            key={activeEducationContent}
            timeout={700}
            classNames="fade"
            nodeRef={nodeRef} // Создайте реф
          > */}
        {/* Все ваши компоненты должны быть внутри этого одного дочернего элемента */}
        {/* <div ref={nodeRef} className="fade"> */}
        {activeEducationContent === "Achievements" && <Achievements />}
        {activeEducationContent === "Topics" && <Topics />}
        {activeEducationContent === "Lessons" && <Lessons />}
        {activeEducationContent === "Competitions" && <Competition />}
        {activeEducationContent === "Results" && <Results />}
        {/* </div> */}
        {/* </CSSTransition>
        </TransitionGroup> */}
      </main>

      <EducationFooter
        activeContent={activeEducationContent}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};

export default EducationLayout;
