import React from "react";

function Sorting({ algo, setAlgo, AlgoRunner }) {
  return (
    <div className="sorting-container">
      <label htmlFor="algorithms">Choose an algorithm:</label>
      <div className="algo-process-container">
        <select
          name="algorithms"
          id="algo_inp"
          defaultValue={"bubble"}
          onChange={(e) => setAlgo(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="heap">Heap Sort</option>
        </select>
        <button className="btn algo-btn" id="al_btn" onClick={AlgoRunner}>
          Run Algorithm
        </button>
      </div>
    </div>
  );
}

export default Sorting;
