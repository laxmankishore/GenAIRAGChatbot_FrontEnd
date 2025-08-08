import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// This means any request starting with /api will be forwarded to your backend — CORS-free.
export default defineConfig({
  base: "genairagchatbot-frontend",
  plugins: [react()],
  server: {
    proxy: {
      '/api' : {
        target: 'http://3.148.113.146:8080', //  backend EC2 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
