
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Local development
        //target: 'http://192.168.1.251:3001', // NGROK Firestore server
        //target: 'http://192.168.1.251:8080', // MongoNGROK server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
