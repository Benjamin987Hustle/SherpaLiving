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

        // SEA Colors
        'sea-main': '#003366', // Bleu Marine Profond
        'sea-dark': '#001A33', // Bleu très foncé
        'sea-light': '#F8F9FA', // Blanc cassé
        'sea-accent': '#00AEEF', // Bleu Ciel Vif
        'sea-highlight': '#FFD700', // Or

        // Les Elfes International
        'elfes-green': '#1E8449',
        'elfes-light': '#F6F8FB',
        'elfes-blue': '#2E86C1',
        'elfes-dark': '#154360',
        'elfes-accent': '#FFD700',

        // Trulli Italian School
        'trulli-main': '#FF9900',
        'trulli-dark': '#E68A00',
        'trulli-light': '#FFFBF5',
        'trulli-text': '#1F2937',
        'trulli-accent': '#008080',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
