import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  base: '/scioly/',
  plugins: [
    react()
  ],
  build: {
    target: "es2015"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
