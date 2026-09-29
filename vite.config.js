import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Inline empty PostCSS config: prevents Vite from walking up and loading a
  // stray tailwind v3 postcss.config.js from a parent directory.
  css: {
    postcss: {},
  },
  build: {
    target: 'es2020',
  },
})
