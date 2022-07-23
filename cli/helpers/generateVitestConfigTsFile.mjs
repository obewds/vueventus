// ./cli/helpers/generateVitestConfigTsFile.mjs

// TODO: integrate this module into cli build
// TODO: delete original stubs/vite-ssg and stubs/vue-ts vitest.config.ts files

export default function () {

const output = `// ./vitest.config.ts

import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude],
    },
}

`
    
return output
        
}
