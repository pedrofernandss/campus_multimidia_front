/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#F5F5F5',
        campusRed: '#6C0318',
        black: '#000',
        red: '#FF0004',
        blue: '#00509A',
        green:'#008810',
        purple: '#2800F2'
      },
      fontFamily: {
        pregular: ["Palanquin-Regular", "sans-serif"],
        psemibold: ["Palanquin-SemiBold", "sans-serif"],
        pbold: ["Palanquin-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

