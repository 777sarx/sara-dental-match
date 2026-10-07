import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map @/components/cursor and @/components/sections to the color sub-folder
      "@/components/cursor": path.resolve(__dirname, "./src/components.json/color/cursor"),
      "@/components/sections": path.resolve(__dirname, "./src/components.json/color/sections"),
      // Map shape (case-insensitive workaround for Linux)
      "@/components/Shape": path.resolve(__dirname, "./src/components.json/Shape"),
      "@/components/shape": path.resolve(__dirname, "./src/components.json/Shape"),
      // Map color sub-folder
      "@/components/color": path.resolve(__dirname, "./src/components.json/color"),
      // Map the rest of @/components to the components.json folder
      "@/components": path.resolve(__dirname, "./src/components.json"),
      // Default @ alias
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
