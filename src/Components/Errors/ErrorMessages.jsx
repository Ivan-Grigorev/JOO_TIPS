import DOMPurify from "dompurify";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ErrorMessages = ({ parentClass, errors }) => {
  useEffect(() => {
    const messages = document.querySelector(`${parentClass} .message`);
    const show = () => (messages.style.opacity = 1);
    const hide = () => (messages.style.opacity = 0);

    // it's get it more smoothly
    errors.length > 0 ? show() : hide(); // prettier-ignore
  });

  return (
    <div className="message">
      {errors &&
        errors.map((error) => <p key={error}>{DOMPurify.sanitize(error)}</p>)}
    </div>
  );
};

ErrorMessages.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  parentClass: PropTypes.string,
};

export default ErrorMessages;
