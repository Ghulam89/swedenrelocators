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
      backgroundImage:{
        common:"linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('assets/images/pagetitle-bg.jpg')",
      }
    },

    fontFamily:{
      font:[ "Roboto","serif"]
    }

  },
  plugins: [],
}

