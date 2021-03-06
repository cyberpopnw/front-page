import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
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
        },
    },
})
