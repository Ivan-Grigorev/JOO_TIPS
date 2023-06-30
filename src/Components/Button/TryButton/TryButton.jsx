import "./TryButton.scss";

function TryButton({ text }) {
  return (
    <>
      <button type="button" className="button try">
        {text} {">"}
      </button>
    </>
  );
}

export default TryButton;
