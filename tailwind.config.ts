import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette dérivée du logo Sunlight FA (flocon glace -> violet)
        sun: {
          ice: "#EAF6FF", // pointe blanche du logo
          frost: "#A8D8FF",
          sky: "#7CCBFF",
          azure: "#4DA6FF",
          deep: "#3E7BD6",
          violet: "#7C7CFF",
          void: "#05070A", // fond principal
          panel: "#0B0F17", // fond des cartes
          line: "#111827", // bordures / séparateurs
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(77, 166, 255, 0.35)",
        "glow-lg": "0 0 60px rgba(77, 166, 255, 0.25)",
        "glow-violet": "0 0 24px rgba(124, 124, 255, 0.35)",
      },
      backgroundImage: {
        "sun-gradient": "linear-gradient(135deg, #A8D8FF 0%, #4DA6FF 45%, #7C7CFF 100%)",
        "sun-radial": "radial-gradient(circle at 50% 0%, rgba(77,166,255,0.18), transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
