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
