import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /* Fuentes del DS Personal (next/font en app/layout.tsx) */
      fontFamily: {
        title: ["var(--font-title)", "Cormorant", "Garamond", "serif"],
        text:  ["var(--font-text)", "Roboto", "Segoe UI", "system-ui", "sans-serif"],
      },
      colors: {
        /* App design tokens — use as bg-brand-card, text-brand-muted, etc. */
        brand: {
          bg:          "var(--app-bg)",
          surface:     "var(--app-surface)",
          card:        "var(--app-card)",
          "card-hover":"var(--app-card-hover)",
          blue:        "var(--app-blue)",
          "blue-strong":"var(--app-blue-strong)",
          "blue-dim":  "var(--app-blue-dim)",
          text:        "var(--app-text)",
          muted:       "var(--app-muted)",
          dim:         "var(--app-dim)",
          success:     "var(--app-success)",
          danger:      "var(--app-danger)",
          warning:     "var(--app-warning)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
