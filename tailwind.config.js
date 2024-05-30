/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightBlue: "rgb(205, 232, 229)",
        customNormalBlue: "rgb(238, 247, 255)",
      },
    },
  },
  plugins: [],
};
