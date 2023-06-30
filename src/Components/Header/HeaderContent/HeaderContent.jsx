import TryButton from "../../Button/TryButton/TryButton";
import Cube from "./Cube/Cube";
import Title from "./TextBlock/Title";

export default function HeaderContent() {
  return (
    <>
      <Title />

      <TryButton text="Спробувати" />

      <Cube />
    </>
  );
}
