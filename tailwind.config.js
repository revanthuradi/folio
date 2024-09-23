/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        bebas : "Bebas Neue",
        oswald : "Oswald",
      },
      colors : {
        textColor :"#777777",
        whitee : "#AAAAAA ",
        orange : "#CB450C",
      }
    },

  },
  plugins: [],
}

