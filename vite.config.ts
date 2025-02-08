import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remplace 'SherpaLiving' par le nom exact de ton repo GitHub
export default defineConfig({
  base: '/SherpaLiving/', // IMPORTANT : Ajoute le chemin correct pour GitHub Pages
  plugins: [react()],
  base: '/'
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
