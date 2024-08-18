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
          DEFAULT: '#16a34a'
        },
        ring: '#dcfce7'
      }
    }
  },
  plugins: []
};
