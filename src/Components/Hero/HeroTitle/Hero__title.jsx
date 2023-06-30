import TryButton from "../../Button/TryButton/TryButton";
import Cube from "./Cube/Cube";
import MobileArrow from "./MobileArrow/MobileArrow";
import Title from "./TextBlock/Title";

import './Hero_title.scss'

export default function HeroTitle() {
  return (
    <section className="hero__title">
      <Title />

      <TryButton text="Спробувати" />

      <Cube />

      <MobileArrow />
    </section>
  );
}
