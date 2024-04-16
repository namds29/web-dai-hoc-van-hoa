
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: true,
  theme: {
    ...colors,
    extend: {
      height: {
        400: "400px",
        100: "100px",
      },
      backgroundColor: {
        primary: "#f9841a",
        subColor: "#5E2E86",
      },
      textColor: {
        primary: "#f9841a",
        secondary: "#5E2E86",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
