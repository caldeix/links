import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* App design tokens — use as bg-brand-card, text-brand-muted, etc. */
        brand: {
          bg:          "var(--app-bg)",
          surface:     "var(--app-surface)",
          card:        "var(--app-card)",
          "card-hover":"var(--app-card-hover)",
          gold:        "var(--app-gold)",
          "gold-dim":  "var(--app-gold-dim)",
          violet:      "var(--app-violet)",
          "violet-dim":"var(--app-violet-dim)",
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
