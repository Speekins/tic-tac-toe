/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js,ts}",
    "./src/*.ts",
    "./src/classes/*.ts"
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00BAFF",
        "custom-purple": "#6336FA"
      }
    },
    fontFamily: {
      OpenSans: ["Open Sans, sans-serif"]
    }
  },
  plugins: [],
}

