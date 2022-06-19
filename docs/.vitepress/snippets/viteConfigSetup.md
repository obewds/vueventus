## Vite Config Setup

There's also a couple of tiny tweaks to make in our project's `./vite.config.js` file:

```javascript
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
    build: {...},
})
```

<!--- 
#TODO: this file is now not being used and 
was extended in ./docs/.vitepress/snippets/ViteSetup.md
-------------------------------------------------------
??? Should this file be deleted ???
--->
