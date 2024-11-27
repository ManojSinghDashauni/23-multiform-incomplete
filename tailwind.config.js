/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "376px",
    },
    colors: {
      "color-bule": "#02295a",
      "color-Purplish-blue": "#473dff",
      "color-Pastel-blue": "#adbeff",
      "color-Light-blue": "#bfe2fd",
      "color-Strawberry-red": "#ed3548",
      "color-Cool-gray": "#9699ab",
      "color-Light-gray": "#d6d9e6",
      "color-Magnolia": "#f0f6ff",
      "color-Alabaster": "#fafbff",
      "color-White": "#ffffff",
      "color-Black": "#000",
    },
    extend: {},
  },
  plugins: [],
};
