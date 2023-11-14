/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      screens: {
      "m-desktop": { max: "1440px" },
      "sm-desktop": { max: "1108px" },
      "l-tablet": { max: "810px" },
      "m-tablet": { max: "672px" },
      "l-phone": { max: "525px" },
      "m-phone": { max: "375px" },
      "sm-phone": { max: "320px" },
    },
    fontFamily: { "zen-dots": "'Zen Dots', sans-serif" },},
  },
  plugins: [],
}

