// ./vite.config.ts

// import the resolve method
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue()
    ],
    // add a resolve parameter/alias
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    // optionally open page on server start
    server: {
        open: true,
    },
})