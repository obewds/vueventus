---
title: Install with Vue CLI
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up VueVentus along with [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), [Vitest](https://vitest.dev/), [Vue Test Utils](https://test-utils.vuejs.org/guide/), [c8](https://github.com/bcoe/c8) and [happy-dom](https://github.com/capricorn86/happy-dom).

Reference Link: [Vue.js Quick Start Guide](https://vuejs.org/guide/quick-start.html#with-build-tools)







## Installing Vue

```bash
npm init vue@latest
```

1. Select `y` to install with `create-vue@latest`
1. Enter a Project Name in the Vue CLI create-vue interface
1. Select `no`/`yes` for everything you don't want/need
    - VueVentus is a Vue/Typescript lib, so you'll likely want to select `Typescript`!
    - `Vitest`, `ESLint` and `Prettier` are usually a good idea
1. Either `cd` into your new directory if you want to run the app from inside the generated folder, or grab the generated files and move them all into the project root directory and delete the generated directory
1. Install the application dependencies with:


```bash
npm install
```

You can check to see the installation was successful by launching Vite's local dev server with:

```bash
npm run dev
```




!!!include(snippets/installingTailwindCss.md)!!!


!!!include(snippets/installingVueVentus.md)!!!


!!!include(snippets/vueVentusTailwindConfigSetup.md)!!!


!!!include(snippets/viteSetup.md)!!!


!!!include(snippets/installingVitest.md)!!!


!!!include(snippets/vitestUnitTestExample.md)!!!


!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
