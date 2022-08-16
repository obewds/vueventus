---
title: Install with Nuxt.js 3
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up VueVentus along with [Nuxt v3](https://v3.nuxtjs.org/), [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), [Vitest](https://vitest.dev/), Nuxt Test Utils (Edge version), [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue), [@vue/test-utils](https://test-utils.vuejs.org/guide/), [@vitest/coverage-c8](https://www.npmjs.com/package/@vitest/coverage-c8) and [happy-dom](https://github.com/capricorn86/happy-dom).






## Installing Nuxt v3

For this example guide, we'll use Nuxt's nuxi to start the install process. So navigate to the directory where you want to begin your project in the command line console and run the Nuxt v3 create command:

```bash
npx nuxi init new-app-or-repo-name-here
```

1. Select `y` to install the installation package
1. Either `cd` into your new directory if you want to run the app from inside the generated folder, or grab the generated files and move them all into the project root directory and delete the generated directory
1. Install the application dependencies with:

```bash
npm install
```

Next up, go ahead and modify the Nuxt-installed NPM script to launch a local Nuxt/Nitro server called `dev`. Simply add on an `--open` flag to the `nuxt dev` command so it looks like this:

```javascript
{
  // ...
  "scripts": {
    // ...
    "dev": "nuxt dev --open",
    // ...
  }
  // ...
}
```

You can check to see the installation was successful by launching a local Nuxt Nitro dev server and launching you Nuxt app starter in your main browser with:

```bash
npm run dev
```








## Installing Tailwind CSS

Currently Tailwind Labs has a guide to install Tailwind for Nuxt v2, but not yet for Nuxt v3. Here's how to install Tailwind CSS into your Nuxt v3 app somewhat easily in the meantime:

So from the project's root directory, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer @nuxtjs/tailwindcss
```

```bash
npx tailwindcss init
```

Next up, open up the generated `./tailwind.config.cjs` file now in the project root directory, and add the following code to include Vite/Vue files into Tailwind's parser:

```javascript
// ./tailwind.config.cjs
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        //"./nuxt.config.{js,ts}", // comment out this line as it's a known bug that causes a console error
        // add this line to include any TWCSS classes that may end up in the app.vue file!
        "./app.vue",
    ],
    // ...
}
```

Next, create a new file `./assets/css/tailwind.css`, and add the base Tailwind CSS directives to the file:

```css
/* ./assets/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next up, we need to include the tailwind.css file into the app and Nuxt/Vite's build process, by opening up the `./nuxt.config.ts` file and adding in the @nuxjs/tailwindcss module dependency we downloaded like this:

```css
/* ./nuxt.config.ts */
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
})
```

Once everything has been added and saved, you can add some markup with Tailwind CSS classes to an app starter file, restart the Nuxt/Nitro local dev server, and see Tailwind's effect with:

```bash
npm run dev
```







!!!include(snippets/installingVueVentus.md)!!!


!!!include(snippets/vueVentusTailwindConfigSetup.md)!!!








## Installing Vitest

Next up is the installation of Vitest and necessary dependencies for goodies like coverage reports and Vue/Nuxt Test Utils!

Here's the [Nuxt v3 testing documentation](https://v3.nuxtjs.org/guide/going-further/testing).

Install all of the testing dependencies with:

```bash
npm install vitest @nuxt/test-utils-edge @vitejs/plugin-vue @vue/test-utils happy-dom @vitest/coverage-c8 --save-dev
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

However with Nuxt v3, there's a tiny bit more setup needed. We need to use a Vitest config file to let Vitest know the information that would typically be in a Vite.js config file (which in Nuxt v3 is integrated into the `./nuxt.config.ts` file!) So go ahead and create a new file in the project root directory `./vitest.config.ts`.

Add the following code to your new `./vitest.config.ts` file:

```javascript
// ./vitest.config.ts

import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue() // so Vitest can work with .vue SFCs
    ],
    test: {
        globals: true, 
        environment: 'happy-dom', // or conversely 'jsdom'
    },
}

```








!!!include(snippets/vitestUnitTestExample.md)!!!











!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
