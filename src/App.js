import "./App.css";
import Header from "./Components/Header";
import Selection from "./Components/Selection";
import Sorting from "./Components/Sorting";
import { useState } from "react";

function App() {
  const [algo, setAlgo] = useState("bubble");
  const [arsize, setArsize] = useState(20);
  const [alspeed, setAlspeed] = useState(3);

  return (
    <div className="App">
      <Header />
      <Selection
        arsize={arsize}
        alspeed={alspeed}
        setArsize={setArsize}
        setAlspeed={setAlspeed}
      />
      <Sorting algo={algo} setAlgo={setAlgo} />
      <div className="bars">
        <div id="array_container"></div>
      </div>
    </div>
  );
}

export default App;
