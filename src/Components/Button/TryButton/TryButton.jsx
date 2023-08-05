import PropTypes from "prop-types";
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

TryButton.propTypes = {
  text: PropTypes.string,
};

export default TryButton;
