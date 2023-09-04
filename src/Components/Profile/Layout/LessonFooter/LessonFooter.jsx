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

      <p className="leson__footer-content">Lorem ipsum dolor sit amet.</p>

      <HiOutlineChevronDoubleRight
        className="swipe-buttons"
        onClick={onRightSwipe}
      />
    </div>
  );
};

export default LessonFooter;
