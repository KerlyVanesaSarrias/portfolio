/** @type {import('tailwindcss').Config} */
export default {

  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus'],
      opacity: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

