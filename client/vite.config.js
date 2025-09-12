import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    proxy: {
      '/api': {
        //for development -> target: 'http://localhost:8080' //for production  target: 'http://backend:8080',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
})

