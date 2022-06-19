## Vite Setup

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

Notice node.js's `resolve()` method import and it's use in the `./vite.config.js` file. Using node method's with Typescript necessitates providing Typescript with types for node.js. So there's a couple additional things to do before moving on.

First up, we need to install node.js types using the `@types/node` package:

```bash
npm install @types/node --save-dev
```

With `@types/node` installed, we still need to actually let Typescript know about node's types. And while we're in there, we might as well go ahead and provide Typescript with `vite/client` types, too!

Open up the project `./tsconfig.json` file and add the following code into the `compilerOptions` object:

```json
{
  "compilerOptions": {
    // ...
    "types": ["node", "vite/client"]
  },
  // ...
}
```

With the new types package and new tsconfig compiler options, it's often a good idea to close the project (in VS Code) and re-open it, to get Typescript to connect all the dots. Afterwards you can test that things are working as expected with:

```bash
npm run dev
```
