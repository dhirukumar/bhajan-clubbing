/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF6B1A",
        "deep-saffron": "#E8530A",
        gold: "#D4A017",
        "pale-gold": "#F5E6A3",
        cream: "#FBF5E6",
        dark: "#0D0A05",
        midnight: "#1A1008",
        brown: "#3D2B1F",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "rotate-slow": "rotateSlow 60s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "float-up": "floatUp 8s linear infinite",
        "fade-up": "fadeUp 1s ease forwards",
        "scroll-pulse": "scrollPulse 2s ease infinite",
      },
      keyframes: {
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.15", transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: "0.28", transform: "translate(-50%, -50%) scale(1.06)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "80%": { opacity: "0.3" },
          "100%": { transform: "translateY(-100vh) scaleX(0.3)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
