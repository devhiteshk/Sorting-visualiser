function Selection({ arsize, alspeed, setArsize, setAlspeed, genNewBtn_handle }) {
  const speedLabels = ["", "0.5×", "1×", "2×", "5×", "10×"];

  return (
    <section className="glass-card mx-4 mt-4 p-5">
      <div className="flex flex-wrap gap-6 items-center justify-between">

        {/* Array size */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
              Array Size
            </label>
            <span className="text-sm font-bold text-violet-400 font-mono bg-violet-950/50 px-2 py-0.5 rounded-md">
              {arsize}
            </span>
          </div>
          <input
            type="range"
            id="arr_size"
            name="array_size"
            min={10}
            max={150}
            step={1}
            value={arsize}
            onChange={(e) => setArsize(e.target.value)}
            className="w-full"
            style={{ accentColor: "#7c3aed" }}
          />
          <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
            <span>10</span><span>150</span>
          </div>
        </div>

        {/* Speed */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
              Speed
            </label>
            <span className="text-sm font-bold text-cyan-400 font-mono bg-cyan-950/50 px-2 py-0.5 rounded-md">
              {speedLabels[alspeed] || alspeed}
            </span>
          </div>
          <input
            type="range"
            id="algo_speed"
            name="algo_speed"
            min={1}
            max={5}
            step={1}
            value={alspeed}
            onChange={(e) => setAlspeed(e.target.value)}
            className="w-full"
            style={{ accentColor: "#06b6d4" }}
          />
          <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
            <span>slow</span><span>fast</span>
          </div>
        </div>

        {/* Generate button */}
        <div className="flex items-end">
          <button
            id="a_generate"
            onClick={genNewBtn_handle}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-violet-600/20 to-cyan-600/20
              border border-violet-500/30 hover:border-violet-400/60
              text-sm font-semibold text-white
              hover:from-violet-600/30 hover:to-cyan-600/30
              transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/30
              active:scale-95"
          >
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M8 16H3v5"/>
            </svg>
            New Array
          </button>
        </div>
      </div>
    </section>
  );
}

export default Selection;
