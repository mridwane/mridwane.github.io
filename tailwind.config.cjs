/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#3F37C9',
      'sun': '#FFA200',
      'white': '#FFFFFF',
      'black-light': '#48525B',
      'black-main': '#2D3339',
      'black-dark': '#24292D',
    },
    extend: {},
  },
  plugins: [],
}
