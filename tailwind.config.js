const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    ...colors,
    extend: {
      height: {
        '400': '400px',
        '100': '100px'
      },
      backgroundColor: {
        primary: "#f9841a",
        subColor: '#5E2E86'
      },
      textColor: {
        primary: '#f9841a',
        secondary: '#5E2E86',
      }
    }
  },
  plugins: [],
};
