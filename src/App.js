import React, { useState } from "react";
import fusee from "./assets/fusee.png";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let test = (v1, v2, v3) => {
    if (v1 === true && v2 === true && v3 === true) {
      return <p className="alerteok">GO!</p>;
    } else {
      return <p className="alerte">NO WAY!</p>;
    }
  };

  return (
    <div>
      <header>
        <img src={fusee} alt="purple rocket"></img>
        <h1>Ready to go</h1>
      </header>
      <body>
        <div className="container">
          <section>
            <Button value={switch1} state={setSwitch1}></Button>
            <Button value={switch2} state={setSwitch2}></Button>
            <Button value={switch3} state={setSwitch3}></Button>
          </section>

          <div className="control">{test(switch1, switch2, switch3)}</div>
        </div>
      </body>
    </div>
  );
};

export default App;
