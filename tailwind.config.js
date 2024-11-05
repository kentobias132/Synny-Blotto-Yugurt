/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-fira-sans-condensed)", ...fontFamily.sans],
        fira: ["var(--font-fira-sans-condensed)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        default: "2px 2px 0 rgba(0, 0, 0, 0.5)",
        md: "3px 3px 0 rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 0 rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "card-hover": {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-10px) scale(1.02)" },
        },
        "card-hover-subtle": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.01)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "floatDelayed 6s ease-in-out infinite 2s",
        "card-hover": "card-hover 0.3s ease-out forwards",
        "card-hover-subtle": "card-hover-subtle 0.3s ease-out forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },

  variants: {
    extend: {
      textShadow: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const textShadowUtilities = {
        ".text-shadow-default": {
          textShadow: "1px 3px 4px rgba(0, 0, 0, 0.2)",
        },

        ".text-shadow-md": {
          textShadow: "3px 3px 0 rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 0 rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(textShadowUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
