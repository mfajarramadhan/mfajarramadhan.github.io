/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#dc2626",
        secondary: "#64748b",
        dark: "#0f172a",
        semiDark: "#7f1d1d",
        semiDark2: "#b91c1c",
        silver: "#94a3b8",
        light: "#ffffff",
      },
      animation: {
        fade: "fade 0.7s ease-in-out",
        gradientAnimate: "gradientAnimate 3s infinite alternate",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        gradientAnimate: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "100%" },
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
