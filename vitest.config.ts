// ./vitest.config.ts

import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude, './cli/stubs/vue-ts/HelloVueVentus.test.js'],
    },
}
