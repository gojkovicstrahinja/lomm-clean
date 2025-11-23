import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Uvezite React plugin

export default defineConfig({
  base: './', 
  plugins: [react()], // Dodajte React plugin
})