// ./cli/generators/vitestConfigTsFile.mjs

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
