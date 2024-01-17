const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...colors,
    extend: {
      height: {
        '400': '400px'
      },
      backgroundColor: {
        primary: "#f9841a",
      },
      textColor: {
        primary: '#f9841a'
      }
    }
  },
  plugins: [],
};
