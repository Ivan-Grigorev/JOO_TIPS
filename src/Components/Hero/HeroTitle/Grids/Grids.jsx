import grid from "./grid.png";
import "./Grids.scss";

export default function Grids() {
  return (
    <>
      <img src={grid} alt="decoration grid icon" className="grid grid-1" />
      <img src={grid} alt="decoration grid icon" className="grid grid-2" />
      <img src={grid} alt="decoration grid icon" className="grid grid-3" />
    </>
  );
}
