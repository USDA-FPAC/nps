import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
//import path from 'path'

//const fdsScssPath = path.resolve(__dirname, "./node_modules/fds-style/src/stylesheets/fds-style.scss")
// FSA Style path to allow for usage of SCSS variables
//const fdsScssPath = "./node_modules/fds-style/src/stylesheets/fds-style.scss"

const config = {
  server: { port: 3000 },
  base: '/nps/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg']
  /*
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "${fsaScssPath}";`
      }
    }
  }
  */  
}

export default defineConfig(config);
