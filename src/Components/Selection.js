import React from "react";

function Selection() {
  return (
    <section className="selection-container">
      <div className="array-input">
        <p className="input-p">Size of Array: </p>
        <input
          type="range"
          name="array_size"
          min={10}
          max={100}
          step={1}
          value={20}
          id="size_arr"
        />
      </div>
      <div className="speed-input">
        <p className="input-p">Speed of Algorithm: </p>
        <input
          type="range"
          name="algo_speed"
          min={1}
          max={5}
          step={1}
          value={3}
          id="algo_speed"
        />
      </div>
    </section>
  );
}

export default Selection;
