import { useState } from "react";

const ALGORITHMS = [
  {
    value: "bubble",
    label: "Bubble Sort",
    complexity: "O(n²)",
    space: "O(1)",
    stable: true,
    color: "from-pink-500 to-rose-600",
    desc: "Repeatedly swaps adjacent elements that are in the wrong order. Simple but inefficient for large datasets.",
  },
  {
    value: "selection",
    label: "Selection Sort",
    complexity: "O(n²)",
    space: "O(1)",
    stable: false,
    color: "from-orange-500 to-amber-600",
    desc: "Finds the minimum element from the unsorted portion and places it at the beginning each pass.",
  },
  {
    value: "insertion",
    label: "Insertion Sort",
    complexity: "O(n²)",
    space: "O(1)",
    stable: true,
    color: "from-yellow-500 to-orange-500",
    desc: "Builds the sorted array one item at a time, efficient for small or nearly-sorted datasets.",
  },
  {
    value: "shell",
    label: "Shell Sort",
    complexity: "O(n log²n)",
    space: "O(1)",
    stable: false,
    color: "from-lime-500 to-green-600",
    desc: "Generalization of insertion sort that allows swapping elements far apart. Uses Knuth's gap sequence.",
  },
  {
    value: "merge",
    label: "Merge Sort",
    complexity: "O(n log n)",
    space: "O(n)",
    stable: true,
    color: "from-cyan-500 to-blue-600",
    desc: "Divide-and-conquer algorithm that splits, sorts, and merges subarrays. Guaranteed O(n log n).",
  },
  {
    value: "quick",
    label: "Quick Sort",
    complexity: "O(n log n)",
    space: "O(log n)",
    stable: false,
    color: "from-violet-500 to-purple-700",
    desc: "Picks a pivot, partitions around it, then recursively sorts each partition. Fast in practice.",
  },
  {
    value: "heap",
    label: "Heap Sort",
    complexity: "O(n log n)",
    space: "O(1)",
    stable: false,
    color: "from-indigo-500 to-violet-700",
    desc: "Builds a max-heap then repeatedly extracts the maximum. Combines selection sort with a heap structure.",
  },
  {
    value: "counting",
    label: "Counting Sort",
    complexity: "O(n + k)",
    space: "O(k)",
    stable: true,
    color: "from-teal-500 to-cyan-600",
    desc: "Non-comparison sort that counts occurrences of each value. Extremely fast when k (range) is small.",
  },
];

const COLOR_LEGEND = [
  { color: "#06b6d4", label: "Comparing" },
  { color: "#f59e0b", label: "Current / Pivot" },
  { color: "#ef4444", label: "Swapping" },
  { color: "#7c3aed", label: "Placed / Gap" },
  { color: "#10b981", label: "Sorted" },
];

function Sorting({ algo, setAlgo, AlgoRunner }) {
  const [hovered, setHovered] = useState(null);
  const current = ALGORITHMS.find((a) => a.value === algo) || ALGORITHMS[0];
  const info = hovered ? ALGORITHMS.find((a) => a.value === hovered) : current;

  return (
    <div className="mx-4 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* Algorithm picker grid */}
      <div className="lg:col-span-2 glass-card p-5">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-3">
          Select Algorithm
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ALGORITHMS.map((alg) => (
            <button
              key={alg.value}
              id={alg.value === algo ? "algo_inp_active" : undefined}
              onClick={() => setAlgo(alg.value)}
              onMouseEnter={() => setHovered(alg.value)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative group rounded-xl px-3 py-2.5 text-left border transition-all duration-200
                ${algo === alg.value
                  ? "border-violet-500/70 bg-violet-950/60 shadow-lg shadow-violet-900/30"
                  : "border-slate-700/50 bg-slate-900/40 hover:border-slate-500/70 hover:bg-slate-800/50"
                }
              `}
            >
              {/* Active indicator */}
              {algo === alg.value && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              )}
              <span className={`text-xs font-semibold font-mono block truncate ${algo === alg.value ? "text-white" : "text-slate-300"}`}>
                {alg.label.replace(" Sort", "")}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">{alg.complexity}</span>
            </button>
          ))}
        </div>

        {/* Hidden select for compatibility with disableButtons */}
        <select
          id="algo_inp"
          value={algo}
          onChange={(e) => setAlgo(e.target.value)}
          className="sr-only"
          aria-hidden="true"
        >
          {ALGORITHMS.map((a) => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>

        {/* Run button */}
        <button
          id="al_btn"
          onClick={AlgoRunner}
          className="mt-4 w-full py-3 rounded-xl font-bold text-sm tracking-wide
            bg-gradient-to-r from-violet-600 to-cyan-600
            hover:from-violet-500 hover:to-cyan-500
            text-white shadow-lg shadow-violet-900/40
            transition-all duration-200 hover:shadow-violet-900/60
            active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Run {current.label}
        </button>
      </div>

      {/* Info panel */}
      <div className="glass-card p-5 flex flex-col gap-4">
        {/* Algorithm details */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-3">
            Algorithm Info
          </p>
          <div className={`h-1 rounded-full bg-gradient-to-r ${info.color} mb-3`}></div>
          <p className="text-sm font-bold text-white mb-1">{info.label}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{info.desc}</p>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-slate-900/60 rounded-lg p-2 text-center border border-slate-700/40">
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">Time</p>
              <p className="text-xs font-bold text-violet-400 font-mono mt-0.5">{info.complexity}</p>
            </div>
            <div className="bg-slate-900/60 rounded-lg p-2 text-center border border-slate-700/40">
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">Space</p>
              <p className="text-xs font-bold text-cyan-400 font-mono mt-0.5">{info.space}</p>
            </div>
            <div className="bg-slate-900/60 rounded-lg p-2 text-center border border-slate-700/40">
              <p className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">Stable</p>
              <p className={`text-xs font-bold font-mono mt-0.5 ${info.stable ? "text-green-400" : "text-rose-400"}`}>
                {info.stable ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>

        {/* Color legend */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-2">
            Color Legend
          </p>
          <div className="space-y-1.5">
            {COLOR_LEGEND.map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: color }}></span>
                <span className="text-[11px] text-slate-400 font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sorting;
