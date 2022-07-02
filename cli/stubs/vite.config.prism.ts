// ./vite.config.ts

// import the resolve method
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import prismjs from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        prismjs({
            languages: ["bash", "css", "javascript", "json", "markup", "markdown", "nginx", "php", "scss", "sql", "typescript", "yaml"],
            plugins: ["line-numbers", "normalize-whitespace", "copy-to-clipboard"],
            theme: "okaidia",
            css: true,
        }),
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
