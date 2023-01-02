import "./App.css";
import Header from "./Components/Header";
import Selection from "./Components/Selection";
import Sorting from "./Components/Sorting";
import { useState, useEffect } from "react";
let divs = [];
let div_sizes = [];

function App() {
  const [algo, setAlgo] = useState("bubble");
  const [arsize, setArsize] = useState(20);
  const [alspeed, setAlspeed] = useState(3);

  // useEffect to generate bars onloading
  useEffect(() => {
    generateArray(arsize);
  }, [arsize]);

  // generate new bars on button click
  let genNewBtn_handle = () => {
    generateArray(arsize);
  };

  //generate array function
  let generateArray = (arsize) => {
    let cont = document.getElementById("array_container");
    cont.innerHTML = "";
    cont.style = "display:flex; flex-direction:row";
    for (let i = 0; i < arsize; i++) {
      div_sizes[i] = Math.floor(Math.random() * 100) + 10;

      divs[i] = document.createElement("div");

      cont.append(divs[i]);
      divs[i].style =
        "margin:0 1px;" +
        "background-color:blue; width:" +
        100 / (arsize - 2 * 0.1) +
        "%; height:" +
        div_sizes[i] * 0.8 +
        "%;";
    }
  };

  //main app HTML
  return (
    <div className="App">
      <Header />
      <Selection
        arsize={arsize}
        alspeed={alspeed}
        setArsize={setArsize}
        setAlspeed={setAlspeed}
        genNewBtn_handle={genNewBtn_handle}
      />
      <Sorting algo={algo} setAlgo={setAlgo} />
      <div className="bars">
        <div id="array_container"></div>
      </div>
    </div>
  );
}

export default App;
