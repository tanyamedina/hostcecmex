import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base: '/hostcecmex/', // Ajusta la configuración de la URL base
  },
  build: {
    outDir: 'dist', // Asegúrate de que coincida con el nombre de tu carpeta de construcción
  },
  base: '/hostcecmex/', // Reemplaza con el nombre de tu repositorio en GitHub
})

