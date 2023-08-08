// import "./Sidebar.scss";
import { Competition, Examinations, Matches, Ratings } from "./icons/Icons";

const Sidebar = ({ activeContent, handleButtonClick }) => {
  return (
    <div className="sidebar">
      <button
        className={activeContent === "Competition" ? "active" : ""}
        onClick={() => handleButtonClick("Competition")}
      >
        <Competition />
      </button>
      <button
        className={activeContent === "Examinations" ? "active" : ""}
        onClick={() => handleButtonClick("Examinations")}
      >
        <Examinations />
      </button>
      <button
        className={activeContent === "Ratings" ? "active" : ""}
        onClick={() => handleButtonClick("Ratings")}
      >
        <Ratings />
      </button>

      <button
        className={activeContent === "Matches" ? "active" : ""}
        onClick={() => handleButtonClick("Matches")}
      >
        <Matches />
      </button>
    </div>
  );
};

export default Sidebar;
