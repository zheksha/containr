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
})
