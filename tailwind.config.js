/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'violet': '#A259FF',
      'gray': '#CCCCCC',
      'gray2': '#3B3B3B',
      'gray3': '#858584',
      'white': '#FFFFFF',
      'green': '#00AC4F'
    },
    screens: {
      'tablet': '834px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1280',
      // => @media (min-width: 1024px) { ... }

      'mobile': '375px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
    },
  },
  plugins: [],
}

