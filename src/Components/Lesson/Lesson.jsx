import { memo, useEffect } from "react";
import { Divider } from "@chakra-ui/layout";
import BackButton from "../Profile/Settings/BackButton/BackButton";

import "./Lesson.scss";
import LessonExample from "./LessonExample/LessonExample";

const Lesson = () => {
  // fetch lesson data
  useEffect(() => {}, []);

  const codeExample = ` // Example of destructuring assignment in JavaScript
    const [a, b, c] = [1, 2, 3];
    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    `;

  return (
    <>
      <BackButton ID="lesson__back-button" />

      <div className="lesson__info">
        <div className="topics">
          <div>
            Theme:
            <p>Lorem, ipsum.</p>
          </div>
          <div>
            Topic:
            <p>Lorem, ipsum.</p>
          </div>
          <div>
            Thread:
            <p>Lorem, ipsum.</p>
          </div>
        </div>

        <Divider />

        <p className="text">
          Tuple packing and unpacking is a useful feature in Python that allows
          for easy assignment of values. It involves assigning multiple values
          to a single variable, which is known as packing, and then unpacking
          those values into separate variables. This can be done using a
          comma-separated list of values, which are enclosed in parentheses.
          Tuple packing and unpacking is a concise and efficient way to work
          with multiple values in Python.
        </p>

        <LessonExample codeExample={codeExample} />
      </div>
    </>
  );
};

export default memo(Lesson);
