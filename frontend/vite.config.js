import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'frontend/dist', // Diretório onde a build será gerada
    rollupOptions: {
      input: {
        main: 'frontend/index.html', // Certifique-se de que o caminho está correto
      },
    },
  },
});
