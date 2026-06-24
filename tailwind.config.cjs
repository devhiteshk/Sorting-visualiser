/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#0f0f1a",
          card: "#13131f",
          border: "#1e1e30",
        },
        accent: {
          purple: "#7c3aed",
          blue: "#2563eb",
          cyan: "#06b6d4",
          pink: "#ec4899",
          green: "#10b981",
          yellow: "#f59e0b",
          red: "#ef4444",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.3)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};
