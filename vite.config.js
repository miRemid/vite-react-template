import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

import config from './config'

const env = process.argv[process.argv.length - 1]
const base = config[env]

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          // libName: "antd",
          // style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    })
  ],
  alias: {
    '@': path.resolve(__dirname, "src"),
    '~': path.resolve(__dirname, "./")
  },
  server: {
    port: 3000,
    proxy: {
      // axios proxy configuration
      // '/api': {
      //   target: 'http://example:port/api/v1',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, ''),
      // }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
})
