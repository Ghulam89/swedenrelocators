/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Roboto", "sans-serif"]
      },

      colors: {
        'primary':'#1F2437',
        'blue': '#247FE1',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#1F2437',
        'gray': '#898a9c',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}

