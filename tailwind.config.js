/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#cffafe',
          DEFAULT: 'var(--primary)',
        },
        ring: 'var(--ring)',
      }
    }
  },
  plugins: []
};
