## Installing Vitest

Vite.js and Vitest.js go together like peas and carrots, so let's go ahead and install Vitest and necessary dependencies for goodies like coverage reports and Vue Test Utils!

```bash
npm install --save-dev vitest @vue/test-utils happy-dom @vitest/coverage-v8
```

With your testing deps installed, you can now add the following commands to your project `./package.json` file:

```json
{
  "scripts": {
    "test": "vitest --dom",
    "coverage": "vitest run --dom --coverage"
  }
}
```

And lastly, with Typescript involved it's advantageous to use a Vitest config file to control Vitest and not interfere with the Vite/Typescript configs. So go ahead and create a new file in the project root directory called `./vitest.config.ts` and add the following code:

```typescript
// ./vitest.config.ts

import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
    },
}
```
