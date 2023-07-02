import GivesList from "./GivesList/GivesList";
import "./WhatCourseGives.scss";
import { memo } from "react";

 const WhatCourseGives = memo(()=> {
  return (
    <section className="hero__what-course-gives">
      <h1>Що вам дають курси</h1>

      <GivesList />
    </section>
  );
})
export default WhatCourseGives