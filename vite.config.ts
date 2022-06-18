import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        open: true,
    },
    build: {
        outDir: './dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'VueVentus',
            formats: ['es','cjs','umd','iife'],
            fileName: (format) => `vueventus.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                //preserveModules: true,
                //sourcemap: true,
            },
            // plugins: [],
            // output: {
            //     // Provide global variables to use in the UMD build for externalized deps
            //     globals: {
            //         vue: 'Vue',
            //     },
            //     //sourcemap: true,
            //     preserveModules: true,
            //     entryFileNames: ({ name: fileName }) => {
            //         return `${fileName}.js`
            //     },
            // },
        },
    },
})
