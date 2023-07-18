import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  plugins: [react(), typescript()],
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  },
  resolve: {
    alias: {
      components: `${path.resolve(__dirname, './src/components/')}`
    }
  }
}))
