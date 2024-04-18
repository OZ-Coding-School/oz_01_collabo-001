import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://3.37.128.177",
        changeOrigin: true, // 호스트 헤더를 target URL로 변경
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // ws: true,
      },
    },
  },
});
