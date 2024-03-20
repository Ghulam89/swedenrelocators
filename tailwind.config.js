/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    

      colors: {
        'primary':'#1F2437',
        'blue': '#247FE1',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#1D2143',
        'gray': '#898a9c',
        'gray-light': '#d3dce6',
      },
    },

    fontFamily:{
      font:[ "Roboto","serif"]
    }

  },
  plugins: [],
}

