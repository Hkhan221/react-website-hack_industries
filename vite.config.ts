import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import { execSync } from 'child_process';


const gitHash = execSync('git rev-parse --short HEAD').toString().trim();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000
   },
/*   resolve: { alias }, */
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        index: 'index.html',
      },
      output: {
        entryFileNames: `[name]-${gitHash}-[hash].js`,
        chunkFileNames: `[name]-${gitHash}-[hash].js`,
        assetFileNames: `[name]-${gitHash}-[hash][extname]`,
      },
    },
  },
});