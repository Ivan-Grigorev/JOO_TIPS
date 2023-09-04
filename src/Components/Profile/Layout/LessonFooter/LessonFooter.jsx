import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

const LessonFooter = () => {
  const onLeftSwipe = () => {};
  const onRightSwipe = () => {};

  return (
    <div className="container">
      <HiOutlineChevronDoubleLeft
        className="swipe-buttons"
        onClick={onLeftSwipe}
      />

      <p className="leson__footer-content">
        Swipe to the left or right respectively
      </p>

      <HiOutlineChevronDoubleRight
        className="swipe-buttons"
        onClick={onRightSwipe}
      />
    </div>
  );
};

export default LessonFooter;
