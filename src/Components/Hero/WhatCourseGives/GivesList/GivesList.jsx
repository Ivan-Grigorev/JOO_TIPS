import "./GivesList.scss";
import brain from "./icons/brain 1.svg";
import optimization from "./icons/optimization 1.svg";
import target from "./icons/target 1.svg";
import arrow from "./icons/Arrow 6.svg";

export default function GivesList() {
  return (
    <>
      <ul>
        <li>
          <img src={brain} alt="brain icon" />
          <p>Розвиток здiбностей</p>
        </li>

        <li className="arrow arrow-list-item-1">
          <img src={arrow} alt="arrow icon" width="60px" />
        </li>

        <li>
          <img src={optimization} alt="optimization icon" />
          <p>Корисне хобi</p>
        </li>

        <li className="arrow arrow-list-item-2">
          <img src={arrow} alt="arrow icon" width="60px" />
        </li>

        <li>
          <img src={target} alt="target icon" />
          <p>Перспективна професiя</p>
        </li>
      </ul>
    </>
  );
}
