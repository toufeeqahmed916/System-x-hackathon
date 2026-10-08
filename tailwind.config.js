/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#131313",
        "surface-lowest": "#0e0e0e",
        "surface-card": "#151515",
        lime: "#C6FF00",
        "lime-dim": "#A6D700",
        white: "#FFFFFF",
        mute: "#9A9A9A",
        bronze: "#CD7F32",
        silver: "#C6C6C6",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Hanken Grotesk'", "sans-serif"],
      },
      spacing: {
        "mobile-margin": "20px",
        "desktop-margin": "72px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
  "0%": { transform: "translateX(-50%)" },
  "100%": { transform: "translateX(0%)" },
},
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
