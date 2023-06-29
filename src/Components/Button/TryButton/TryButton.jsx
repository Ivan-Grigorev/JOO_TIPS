import "./TryButton.scss";

function TryButton({ text }) {
  return (
    <>
      <button type="button" className="button">
        {text} {">"}
      </button>
    </>
  );
}

export default TryButton;
