/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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

