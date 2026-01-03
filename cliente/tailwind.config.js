// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui(),
    require("flowbite/plugin")
  ],
};