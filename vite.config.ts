import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Types': path.resolve(__dirname, './src/types'),
      '@Store': path.resolve(__dirname, './src/store'),
    },
  },
  plugins: [react()],
})
