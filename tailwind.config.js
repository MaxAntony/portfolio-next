const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
      },
      colors: {
        fontsoft: '#7d7789',
        background: '#f6fbff',
      },
    },
  },
  plugins: [],
};
