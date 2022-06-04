## Vite Config Setup

There's also a couple of tiny tweaks to make in our project's `./vite.config.js` file:

```javascript
// ./vite.config.js

// import the resolve method
import { resolve } from 'path'

export default defineConfig({
    plugins: [...],
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
    // for Vitest!
    test: {
        globals: true,
    },
    build: {...},
})
```
