import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
        customComponentResolvers: [ElementPlusResolver()],
    }),
    //按需导入element-plus的css样式
    styleImport({
        libs: [
            {
                libraryName: 'element-plus',
                esModule: true,
                resolveStyle: (name) => {
                    return `element-plus/theme-chalk/${name}.css`
                },
            },
        ],
    }),
  ],
  server:{
      proxy:{
          '/api':{
              target: 'http://localhost:8866/',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
          }
      }
  }
})
