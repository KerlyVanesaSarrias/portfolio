/** @type {import('tailwindcss').Config} */
export default {

  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
    },
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

