import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  base: '/Docs-Mini-React-App/',
  plugins: [react(),
    tailwindcss(),
  ],
})

