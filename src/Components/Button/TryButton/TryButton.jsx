import "./TryButton.scss";
import { memo } from "react";

const TryButton = memo(({ text }) => {
  return (
    <>
      <button type="button" className="button try">
        {text} {">"}
      </button>
    </>
  );
});

export default TryButton;
