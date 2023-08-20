const Topics = ({ topicsClass, topicsRef }) => {
  return (
    <>
      <div className={`content topics ${topicsClass}`} ref={topicsRef}>
        <p>Here'd be Topics</p>
      </div>
    </>
  );
};

export default Topics;
