/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#E7E7E7',
      },
      screens: {
        'md': {'max': '1100px'},
        '3xl':'1400px',
      },
    },
  },
  plugins: [],
}