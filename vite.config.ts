import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from 'vite-plugin-svgr'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias:{
      "@app": path.resolve(__dirname, "src/app"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@ui": path.resolve(__dirname, "src/ui"),


    }
  }
})
