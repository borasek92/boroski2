/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e6f1ff',
            100: '#cce3ff',
            200: '#99c7ff',
            300: '#66aaff',
            400: '#338eff',
            500: '#0072ff', // Główny kolor
            600: '#005bd9',
            700: '#0044b3',
            800: '#002e8c',
            900: '#001766',
          },
          secondary: {
            50: '#f5f7fa',
            100: '#ebeef5',
            200: '#d8deeb',
            300: '#c4cee0',
            400: '#b0bed6',
            500: '#9caecb',
            600: '#88a1c1',
            700: '#7491b6',
            800: '#6080ac',
            900: '#4c70a1',
          },
          dark: {
            50: '#ebeaef',
            100: '#d6d6df',
            200: '#adacbe',
            300: '#84839e',
            400: '#5a597d',
            500: '#31305d', // Główny ciemny kolor
            600: '#272653',
            700: '#1d1c48',
            800: '#13133e',
            900: '#090933',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif'],
        },
        boxShadow: {
          'soft': '0 4px 6px -1px rgba(0, 114, 255, 0.1), 0 2px 4px -1px rgba(0, 114, 255, 0.06)',
          'glow': '0 0 15px rgba(0, 114, 255, 0.5)',
        },
        animation: {
          'gradient': 'gradient 8s ease infinite',
        },
        keyframes: {
          gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }