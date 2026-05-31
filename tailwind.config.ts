import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ember: "#d9411e",
        pepper: "#8f1d14",
        smoke: "#24201c",
        palm: "#1e5b45",
        clay: "#f3e7d0",
        coal: "#151311",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(217, 65, 30, 0.24)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flame: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1) rotate(-2deg)" },
          "50%": { opacity: "1", transform: "scale(1.08) rotate(2deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        flame: "flame 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
