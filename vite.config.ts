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
    // Expose local service to LAN
    server:{
        host: '0.0.0.0',
        proxy: {
            '/api': {
              target: 'https://data.cyberpop.online/', //Actual request address
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/text': {
                target: 'https://d2cimmz3cflrbm.cloudfront.net/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/text/, '')
            },
            '/data': {
                target: 'https://api.cyberpop.online/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/data/, '')
            },
            '/game': {
                target: 'https://gamepool.cyberpop.online/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/game/, '')
            },
            '/code': {
                target: 'https://invitecode.cyberpop.online/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/code/, '')
            },
            '/email': {
                target: 'http://192.168.0.134/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/game/, '')
            },
            '/bobabrewery': { 
                target: 'https://bobabrewery.com/', //Actual request address
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bobabrewery/, '')
            }
        },
    },
    define: {
        'process.env': {},
    },
    resolve: {
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
