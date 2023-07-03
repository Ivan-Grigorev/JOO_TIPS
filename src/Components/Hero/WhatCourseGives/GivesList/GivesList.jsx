import "./GivesList.scss";
import brain from "./icons/brain 1.svg";
import optimization from "./icons/optimization 1.svg";
import target from "./icons/target 1.svg";
import arrow from "./icons/Arrow 6.svg";

import { memo } from "react";

const GivesList = () => {
  return (
    <>
      <ul>
        <li>
          <img src={brain} alt="brain icon" loading="lazy" />
          <p>Розвиток здiбностей</p>
        </li>

        <li className="arrow arrow-list-item-1">
          <img src={arrow} alt="arrow icon" width="60px" loading="lazy" />
        </li>

        <li>
          <img src={optimization} alt="optimization icon" loading="lazy" />
          <p>Корисне хобi</p>
        </li>

        <li className="arrow arrow-list-item-2">
          <img src={arrow} alt="arrow icon" width="60px" loading="lazy" />
        </li>

        <li>
          <img src={target} alt="target icon" loading="lazy" />
          <p>Перспективна професiя</p>
        </li>
      </ul>
    </>
  );
};

export default memo(GivesList);
