import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
// import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es6",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    port: 1314,
    // 选项写法
    proxy: {
      "/pag": {
        target: "https://cdn.tmui.design",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      "/api1": {
        //设置跨域变量代号
        target: "https://svip.bljiex.cc/", //你想要代理的目标源链接
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api1/, "/"),
        headers: {
          //重点在这里，添加配置项 headers 就可以了
          Referer: "https://svip.bljiex.cc",
        },
      },
      "/api2": {
        //设置跨域变量代号
        target: "https://m1-a1.cloud.vving.vip:2223/", //你想要代理的目标源链接
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api2/, "/"),
        headers: {
          //重点在这里，添加配置项 headers 就可以了
          Referer: "https://m1-a1.cloud.vving.vip:2223",
        },
      },
    },
  },
  plugins: [uni(), vueJsx()],
});