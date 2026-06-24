import "./App.css";
import Header from "./Components/Header.jsx";
import Selection from "./Components/Selection.jsx";
import Sorting from "./Components/Sorting.jsx";
import { useState, useEffect, useRef } from "react";
import bubble_sort    from "./Components/Sorting/bubble_sort.js";
import selection_sort from "./Components/Sorting/selection_sort.js";
import insertion_sort from "./Components/Sorting/insertion_sort.js";
import shell_sort     from "./Components/Sorting/shell_sort.js";
import merge_sort     from "./Components/Sorting/merge_sort.js";
import quick_sort     from "./Components/Sorting/quick_sort.js";
import heap_sorting   from "./Components/Sorting/heap_sort.js";
import counting_sort  from "./Components/Sorting/counting_sort.js";

// ─── Bar color used for default/idle bars ────────────────────────────────────
// We use a CSS gradient string that matches our violet→cyan theme
const BAR_DEFAULT_COLOR = "linear-gradient(to top, #7c3aed, #06b6d4)";

let divs      = [];
let div_sizes = [];

function App() {
  const [algo, setAlgo]       = useState("bubble");
  const [arsize, setArsize]   = useState(50);
  const [alspeed, setAlspeed] = useState(3);
  const [running, setRunning] = useState(false);
  const contRef = useRef(null);

  useEffect(() => {
    generateArray(arsize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arsize]);

  const CANVAS_HEIGHT = 340; // matches the container height in px

  const generateArray = (size) => {
    const cont = document.getElementById("array_container");
    if (!cont) return;
    cont.innerHTML = "";
    divs      = [];
    div_sizes = [];

    for (let i = 0; i < size; i++) {
      div_sizes[i] = Math.floor(Math.random() * 90) + 10; // 10–100 (percentage of canvas)
      divs[i]      = document.createElement("div");

      const pct = 100 / (size - 2 * 0.1);
      divs[i].style.cssText = [
        "margin:0 1px",
        `background:${BAR_DEFAULT_COLOR}`,
        `width:${pct}%`,
        `height:${(div_sizes[i] / 100) * CANVAS_HEIGHT}px`,
        "border-radius:3px 3px 0 0",
        "transition:height 0.05s ease",
        "flex-shrink:0",
      ].join(";");

      cont.appendChild(divs[i]);
    }
  };

  // ─── Button refs for disable/enable ────────────────────────────────────────
  const disableButtons = () => {
    setRunning(true);
    ["arr_size", "algo_speed", "a_generate", "al_btn", "algo_inp"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.disabled = true;
    });
  };

  const enableButtons = () => {
    setRunning(false);
    ["arr_size", "algo_speed", "a_generate", "al_btn", "algo_inp"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.disabled = false;
    });
  };

  // ─── Speed mapping ──────────────────────────────────────────────────────────
  const getDelayTime = (speed, size) => {
    const multipliers = { 1: 1, 2: 10, 3: 100, 4: 1000, 5: 10000 };
    const mult = multipliers[parseInt(speed)] ?? 100;
    return 1000 / (Math.floor(size / 10) * mult);
  };

  // ─── Run selected algorithm ─────────────────────────────────────────────────
  const AlgoRunner = () => {
    disableButtons();
    const delay = getDelayTime(alspeed, arsize);

    const map = {
      bubble:    () => bubble_sort(divs, div_sizes, enableButtons, delay, arsize),
      selection: () => selection_sort(divs, div_sizes, enableButtons, delay, arsize),
      insertion: () => insertion_sort(divs, div_sizes, enableButtons, delay, arsize),
      shell:     () => shell_sort(divs, div_sizes, enableButtons, delay, arsize),
      merge:     () => merge_sort(divs, div_sizes, enableButtons, delay, arsize),
      quick:     () => quick_sort(divs, div_sizes, enableButtons, delay, arsize),
      heap:      () => heap_sorting(divs, div_sizes, enableButtons, delay, arsize),
      counting:  () => counting_sort(divs, div_sizes, enableButtons, delay, arsize),
    };

    (map[algo] ?? map.bubble)();
  };

  return (
    <div className="min-h-screen grid-bg pb-10">
      {/* ── Header ── */}
      <Header />

      {/* ── Controls ── */}
      <Selection
        arsize={arsize}
        alspeed={alspeed}
        setArsize={setArsize}
        setAlspeed={setAlspeed}
        genNewBtn_handle={() => generateArray(arsize)}
      />

      {/* ── Algorithm picker + info ── */}
      <Sorting algo={algo} setAlgo={setAlgo} AlgoRunner={AlgoRunner} />

      {/* ── Visualiser canvas ── */}
      <div className="mx-4 mt-4">
        <div className="glass-card p-4 glow-purple">
          {/* Canvas header */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
              Visualiser
            </p>
            {running && (
              <div className="flex items-center gap-2 text-xs text-violet-400 font-mono">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
                running…
              </div>
            )}
          </div>

          {/* Bar container — bars grow upward via align-items: flex-end */}
          <div
            id="array_container"
            ref={contRef}
            style={{
              height: "340px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              padding: "0 2px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          ></div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-8 flex flex-col items-center gap-1 text-xs text-slate-500 font-mono">
        <p>
          Made with{" "}
          <span className="text-rose-400">♥</span>{" "}
          by{" "}
          <a href="https://hiteshk.dev" className="text-violet-400 hover:text-violet-300 transition-colors">
            @devhiteshk
          </a>
        </p>
        <a
          href="https://github.com/devhiteshk/Sorting-visualiser"
          className="text-slate-600 hover:text-slate-400 transition-colors"
        >
          github.com/devhiteshk/Sorting-visualiser
        </a>
      </footer>
    </div>
  );
}

export default App;
