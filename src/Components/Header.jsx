function Header() {
  return (
    <header className="relative gradient-border-top glass-card mx-4 mt-4 px-6 py-4 flex items-center justify-between">
      {/* Left: logo + title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="12" width="4" height="9" rx="1"/>
            <rect x="10" y="7"  width="4" height="14" rx="1"/>
            <rect x="17" y="3" width="4" height="18" rx="1"/>
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white leading-none">
            Sorting <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Visualiser</span>
          </h1>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">algorithm animation playground</p>
        </div>
      </div>

      {/* Right: status + link */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <div className="pulse-dot"></div>
          <span>ready</span>
        </div>
        <a
          href="https://github.com/devhiteshk/Sorting-visualiser"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-400 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
