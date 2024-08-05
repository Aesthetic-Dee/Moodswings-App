/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ["Satisfy", "cursive"],
        'anton': ["Anton SC", "sans-serif"],
        'amita': ["Amita", "serif"],
        'cbg': ["Covered By Your Grace", "cursive"],
        'homemade': ["Homemade Apple", "cursive"],
        'merienda': ["Merienda", "cursive"],
        'oleo': ["Oleo Script", "system-ui"],
        'Bree': ["Bree Serif", "serif"]
      },
      height: {
        120: "28rem",
        145: "32rem",
        160: "50rem"
      },
      screens: {
        'sm': {'max': '600px'},
        'lg': '600px',
      },
    },
  },
  plugins: [],
};
