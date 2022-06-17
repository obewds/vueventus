---
title: Install with Vite.js
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up VueVentus along with [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), [Vitest](https://vitest.dev/), [Vue Test Utils](https://test-utils.vuejs.org/guide/), [c8](https://github.com/bcoe/c8) and [happy-dom](https://github.com/capricorn86/happy-dom).






## Installing Vite/Vue

For this example guide, we'll use Vite.js to install both Vite and Vue.js. So navigate to the directory where you want to begin your project in the command line console and run the vite create command:

```bash
npm create vite@latest
```

1. Enter a Project Name in the Vite CLI interface
1. Select `vue` for the framework
1. Select `vue` for the variant (VueVentus doesn't support Typescript yet)
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


!!!include(snippets/viteConfigSetup.md)!!!


!!!include(snippets/installingVitest.md)!!!


!!!include(snippets/vitestUnitTestExample.md)!!!


!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
