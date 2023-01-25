/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'robCond': ["Roboto Condensed", 'sans-serif'],
      'montAlt': ["Montserrat Alternates", 'sans-serif']
    },
  },
  plugins: [],
}