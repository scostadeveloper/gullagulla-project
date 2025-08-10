import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações para produção
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['flowbite-react', 'flowbite'],
          icons: ['react-icons', 'lucide-react'],
        },
      },
    },
    // Compressão adicional
    chunkSizeWarningLimit: 1000,
  },
  // Otimizações de desenvolvimento
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3001,
    open: true,
  },
})
