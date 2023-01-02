import React from "react";

function Selection({ arsize, alspeed, setArsize, setAlspeed }) {
  return (
    <section className="input-container">
      <div className="selection-container">
        <div className="array-input">
          <p className="input-p">Size of Array: </p>
          <input
            type="range"
            name="array_size"
            min={10}
            max={100}
            step={1}
            value={arsize}
            onChange={(e) => setArsize(e.target.value)}
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
            value={alspeed}
            onChange={(e) => setAlspeed(e.target.value)}
            id="algo_speed"
          />
        </div>
      </div>
      <div className="generate-array">
        <button className="btn" id="a_generate" type="submit">
          Generate new Array!
        </button>
      </div>
    </section>
  );
}

export default Selection;
