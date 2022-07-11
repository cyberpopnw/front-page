import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        viteCompression({
            ext: ".gz",
            deleteOriginFile: false
        })
    ],
    // 暴露本地服务到局域网
    server:{
        host: '0.0.0.0',
        proxy: {
            '/sand': {
              target: 'https://miniapp-sandbox.gateapi.io/',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/sand/, '')
            },
            '/gate': {
                target: 'https://www.gate.io/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/gate/, '')
            },
            // '/openapi': { // 正式上线接口
            //     target: 'https://openapi.gate.io/',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/openapi/, '')
            // },
        },
    },
    define: {
        'process.env': {},
    },
    resolve: {
        dedupe: ['vue'],
        alias: {
            '@': '/src/',
            // '@': path.resolve(__dirname, 'src'),
            // process: 'process/browser',
            // stream: 'stream-browserify',
            // zlib: 'browserify-zlib',
            // util: 'util',
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        },
    },

})
