import React from "react";

function Sorting({ algo, setAlgo }) {
  console.log(algo);

  return (
    <div className="sorting-container">
      <label htmlFor="algorithms">Choose an algorithm:</label>
      <div className="algo-process-container">
        <select
          name="algorithms"
          id="algo"
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
        <button className="btn algo-btn" id="a_generate" type="submit">
          Run Algorithm
        </button>
      </div>
    </div>
  );
}

export default Sorting;
