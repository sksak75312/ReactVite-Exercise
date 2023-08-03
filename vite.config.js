import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中、生產中
  base: process.env.NODE_ENV === "production" ? "/ReactVite-Exercise/" : "/",
  plugins: [react()],
})
