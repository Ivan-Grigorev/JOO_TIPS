import "./Languages.scss";
import PythonIcon from "./icons/python_logo.svg";
import JavascriptIcon from "./icons/javascript_logo.svg";
import PhpIcon from "./icons/php_logo.svg";
import SwiftIcon from "./icons/swift_logo.svg";
import JavaIcon from "./icons/java_logo.svg";
import GolangIcon from "./icons/golang_logo.svg";
import CPlusPlusIcon from "./icons/cplusplus_logo.svg";
import CSharpIcon from "./icons/csharp_logo.svg";

const Languages = () => {
  return (
    <>
      <section className="languages-section section">
        <p className="languages-title">Programming languages</p>
        <div className="language-cards-list">
          <div className="card-wrapper">
            <div className="card">
              <img
                src={PythonIcon}
                alt="python logo"
                className="programming-language-icon"
              />
              <p className="card__text">Python</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={JavascriptIcon}
                alt="javascript-logo"
                className="programming-language-icon"
              />
              <p className="card__text">JavaScript</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={JavaIcon}
                alt="java-logo"
                className="programming-language-icon"
              />
              <p className="card__text">Java</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={SwiftIcon}
                alt="swift-logo"
                className="programming-language-icon"
              />
              <p className="card__text">Swift</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={CSharpIcon}
                alt="csharp-logo"
                className="programming-language-icon"
              />
              <p className="card__text">C#</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={CPlusPlusIcon}
                alt="cplus-plus-logo"
                className="programming-language-icon"
              />
              <p className="card__text">C++</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={GolangIcon}
                alt="golang-logo"
                className="programming-language-icon"
              />
              <p className="card__text">Golang</p>
              <div className="card-shine"></div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img
                src={PhpIcon}
                alt="php-logo"
                className="programming-language-icon"
              />
              <p className="card__text">php</p>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Languages;
