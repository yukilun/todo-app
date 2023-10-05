/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    colors: {
      'white': '#FFFFFF',
      'sky-blue': 'hsl(192, 100%, 67%)',
      'orchid': 'hsl(280, 87%, 65%)',
      'gray': {
        50: 'hsl(0, 0%, 98%)'
      },
      'blue': {
        500: 'hsl(220, 98%, 61%)',
        800: 'hsl(235, 24%, 19%)',
        950: 'hsl(235, 21%, 11%)'
      },
      'grayish-blue': {
        50: 'hsl(236, 33%, 92%)',
        100: 'hsl(236, 33%, 92%)',
        200: 'hsl(233, 11%, 84%)',
        300: 'hsl(234, 39%, 85%)',
        600: 'hsl(236, 9%, 61%)',
        700: 'hsl(234, 11%, 52%)',
        800: 'hsl(235, 19%, 35%)',
        900: 'hsl(233, 14%, 35%)',
        950: 'hsl(237, 14%, 26%)'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('/src/assets/images/bg-mobile-light.jpg')"
      },
      boxShadow: {
        'custom': 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
        'custom-dark': 'rgba(0, 0, 0, 0.4) 0px 8px 24px;'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}