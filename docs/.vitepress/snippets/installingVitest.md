## Installing Vitest

Vite.js and Vitest.js go together like peas and carrots, so let's go ahead and install Vitest and necessary dependencies for goodies like coverage reports and Vue Test Utils!

```bash
npm install --save-dev vitest @vue/test-utils happy-dom c8
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
