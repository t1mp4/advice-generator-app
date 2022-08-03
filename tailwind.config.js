/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      base: 800,
    },
    colors: {
      'cyan-light': 'hsl(193, 38%, 86%)',
      'green-neon': 'hsl(150, 100%, 66%)',
      'blue-grayish': 'hsl(217, 19%, 38%)',
      'blue-grayish-dark': 'hsl(217, 19%, 24%)',
      'blue-dark': 'hsl(218, 23%, 16%)',
    },
    screens: {
      desktop: '650px',
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 2s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
