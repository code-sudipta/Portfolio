import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000,      // Set a specific port
    strictPort: true, // Fail if port is already in use
  },
  preview: {
    host: '0.0.0.0', // For production preview
    port: 4173,      // Default preview port
    strictPort: true,
  }
});
