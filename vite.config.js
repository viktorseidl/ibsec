import { defineConfig } from 'vite' 
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build:{
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
         
      }
    }
  }
})
