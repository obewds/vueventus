# VueVentus + Vue CLI

This guide will walk through installing and setting up VueVentus along with [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), [Vitest](https://vitest.dev/), [Vue Test Utils](https://test-utils.vuejs.org/guide/), [c8](https://github.com/bcoe/c8) and [happy-dom](https://github.com/capricorn86/happy-dom).

https://vuejs.org/guide/quick-start.html#with-build-tools





```bash
npm init vue@latest
```

1. Enter a Project Name in the Vue CLI create-vue interface
1. Select `no` for everything you don't want/need - except Vitest (VueVentus doesn't support Typescript yet)
1. Select `yes` for Vitest
1. Select `yes` for Vitest
1. Select `no` for anything else you don't want/need (although `ESLint` and `Prettier` are a good idea)
1. Install the application dependencies with:


```bash
npm install
```

You can check to see the installation was successful by launching Vite's local dev server with:

```bash
npm run dev
```





!!!include(snippets/skipToConfiguration.md)!!!
