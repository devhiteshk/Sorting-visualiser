import "./App.css";
import Header from "./Components/Header";
import Selection from "./Components/Selection";
import Sorting from "./Components/Sorting";
import { useState, useEffect } from "react";
import bubble_sort from "./Components/Sorting/bubble_sort.js";
import selection_sort from "./Components/Sorting/selection_sort";

// container element
let cont;

// elements to disable all functions
let inp_ars;
let inp_als;
let g_btn;
let al_btn;
let algo_inp;

let divs = []; //stores the styles for i'th div div in container div
let div_sizes = []; //stores the value for i'th div in container div

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
    cont = document.getElementById("array_container");
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

  // when algorithm is running disable all functionality
  let disableButtons = () => {
    inp_ars = document.getElementById("arr_size");
    inp_als = document.getElementById("algo_speed");
    g_btn = document.getElementById("a_generate");
    al_btn = document.getElementById("al_btn");
    algo_inp = document.getElementById("algo_inp");
    inp_als.disabled = true;
    inp_ars.disabled = true;
    g_btn.disabled = true;
    al_btn.disabled = true;
    algo_inp.disabled = true;
  };

  // enable all functionality after running the algo
  let enableButtons = () => {
    inp_als.disabled = false;
    inp_ars.disabled = false;
    g_btn.disabled = false;
    al_btn.disabled = false;
    algo_inp.disabled = false;
  };

  //run algorithms
  let AlgoRunner = () => {
    disableButtons();

    let speed = alspeed;
    switch (parseInt(speed)) {
      case 1:
        speed = 1;
        break;
      case 2:
        speed = 10;
        break;
      case 3:
        speed = 100;
        break;
      case 4:
        speed = 1000;
        break;
      case 5:
        speed = 10000;
        break;
      default:
        speed = 10000;
    }

    let delay_time = 1000 / (Math.floor(arsize / 10) * speed);

    switch (algo) {
      case "bubble":
        bubble_sort(divs, div_sizes, enableButtons, delay_time, arsize);
        break;
      case "selection":
        selection_sort(divs, div_sizes, enableButtons, delay_time, arsize);
        break;
      default:
        break;
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
      <Sorting algo={algo} setAlgo={setAlgo} AlgoRunner={AlgoRunner} />
      <div className="bars">
        <div id="array_container"></div>
      </div>
    </div>
  );
}

export default App;
