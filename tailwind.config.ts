import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asap: {
          purple: "#2905A1",
          red: "#ED2E38",
          cyan: "#00A6D6",
          ink: "#050B16",
          panel: "#0B1527",
          mist: "#EAF7FB"
        }
      },
      boxShadow: {
        glow: "0 0 32px rgba(0, 166, 214, 0.38)",
        panel: "0 24px 70px rgba(0, 0, 0, 0.38)"
      },
      fontFamily: {
        sans: [
          "Franklin Gothic Medium",
          "Arial Narrow",
          "Arial",
          "sans-serif"
        ],
        display: [
          "Arial",
          "Helvetica",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
