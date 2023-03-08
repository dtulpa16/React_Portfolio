/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      tooltip: {
        base: "bg-white text-gray-900 text-xs border border-gray-200 rounded-md py-2 px-3",
      },
    },
  },
  plugins: [],
};
