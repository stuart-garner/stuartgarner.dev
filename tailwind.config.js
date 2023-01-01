/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      headerPoly: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)",
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
