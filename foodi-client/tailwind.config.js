/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        red: "FF6868",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
