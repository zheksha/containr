/* eslint-disable no-undef */
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.glb'],
  build: {
    assetsInlineLimit: 0, // Ensure binary files are not inlined
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: 'localhost', // You can change this to 0.0.0.0 to listen on all interfaces
    port: 3000, // Specify the port
    strictPort: true, // If true, Vite will fail if the port is already in use
  },
})
