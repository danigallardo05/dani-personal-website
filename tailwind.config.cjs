/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
      }
    },
  },
  plugins: [],
}
