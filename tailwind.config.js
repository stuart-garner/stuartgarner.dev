/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      headerPoly: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      footerPoly: "polygon(0 0, 50% 0, 100% 0, 100% 100%, 0 100%)",
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
