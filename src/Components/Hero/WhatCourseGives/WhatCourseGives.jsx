import GivesList from "./GivesList/GivesList";
import "./WhatCourseGives.scss";

export default function WhatCourseGives() {
  return (
    <section className="hero__what-course-gives">
      <h1>Що вам дають курси</h1>

      <GivesList />
    </section>
  );
}
