/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cdl-blue': '#004C99',
        'cdl-light': '#F6F8FB',
        'cdl-accent': '#FFD700', // Un peu d'or pour le côté premium
        'cdl-red': '#D52B1E', // Rouge Suisse
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
