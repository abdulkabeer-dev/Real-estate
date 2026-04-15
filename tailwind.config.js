/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f0',
          100: '#fde4dc',
          200: '#fac8b9',
          300: '#f6a38c',
          400: '#f1734f',
          500: '#ee5427',
          600: '#df3a16',
          700: '#ba2b13',
          800: '#942517',
          900: '#782316',
          950: '#410e07',
        },
        dark: {
          800: '#1a1a2e',
          900: '#0f0f23',
          950: '#0a0a1a',
        },
        gold: {
          400: '#d4a853',
          500: '#c49a3c',
          600: '#a8822e',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
