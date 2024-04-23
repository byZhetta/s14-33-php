/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1:"#131429",
        color2:"#FAFAFA",
        color3:"#232442",
        color4: "rgba(218, 216, 249, 1)",
      }
    },
  },
  plugins: [require("daisyui")],
}

