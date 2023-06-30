import "./GivesList.scss";
import brain from "./images/brain 1.svg";
import optimization from "./images/optimization 1.svg";
import target from "./images/target 1.svg";

export default function GivesList() {
  return (
    <>
      <ul>
        <li>
          <img src={brain} alt="brain icon" />
          <p>Розвиток здiбностей</p>
        </li>
        <li>
          <img src={optimization} alt="optimization icon" />
          <p>Корисне хобi</p>
        </li>
        <li>
          <img src={target} alt="target icon" />
          <p>Перспективна професiя</p>
        </li>
      </ul>
    </>
  );
}
