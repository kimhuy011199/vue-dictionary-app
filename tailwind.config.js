/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          100: '#dcfce7',
          500: '#22c55e',
          DEFAULT: '#16a34a',
          700: '#15803d'
        },
        ring: '#dcfce7'
      }
    }
  },
  plugins: []
};
