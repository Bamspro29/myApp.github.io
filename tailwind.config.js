/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extend:{
      display: ['group-focus']
    }
  }
}

