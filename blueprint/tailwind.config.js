/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        MonteCarlo: ['MonteCarlo']
      },
      colors: {
        primary: '#6D0022',
        secondary: '#E9899E',
        whity: '#FEFEFE',
        darky: '#262626',
        success: '#2D3021',
      },
    },
  },
  plugins: [],
}

