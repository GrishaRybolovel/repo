/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '96': '24rem',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors:{
        'background': "rgba(229, 239, 250, 1)",
        'primary': "rgba(163, 144, 228, 1)",
        'secondary': "rgba(135, 137, 143, 1)",
        'graybg': "rgba(243, 246, 252, 1)"
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}

