// ./cli/generators/viteConfigPrismTsFile.mjs

export default function () {

const output = `// ./vite.config.ts

// import the resolve method
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { prismjsPlugin } from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        prismjsPlugin({
            languages: ["bash", "css", "javascript", "json", "markup", "markdown", "nginx", "php", "scss", "sql", "typescript", "yaml", "python", "apacheconf"],
            plugins: ["line-numbers", "normalize-whitespace", "copy-to-clipboard", "autolinker", "line-highlight"],
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

`

return output
    
}
