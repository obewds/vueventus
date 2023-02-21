---
title: vueventus CLI
---

<script setup>

    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import cliData from '../../cli/helpers/cliData.mjs'

    const stack1 = cliData.stacks.vueTwViteTs.name
    const stack2 = cliData.stacks.vueTwViteSsgMdTs.name
    const stack3 = cliData.stacks.vueTwNuxt3.name

</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up a project with the vueventus CLI.









## Core Stacks

For now, the CLI can install the following stacks to kickoff app development:

1. **SPA Stack:** {{ stack1 }}
1. **SSG Stack:** {{ stack2 }}
1. **Nuxt 3 Stack:** {{ stack3 }}

### The SPA Stack

The {{ stack1 }} is a classic Vue 3 via a Vite install option setup for Single Page App development. It's Typescript based and installs with pre-configured Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

### The SSG Stack

The {{ stack2 }} is a SSR-friendly Static Site Generator setup for Vue 3 that's powered by Vite-SSG and Vite.js. It's also Typescript based and installs with pre-configured Pinia for stores. The stack also brings in the Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

The SSG stack additionally incorporates Markdown, auto-routing Pages, and auto-loading component (Unplugin) functionality in the development stack, allowing for markdown in Vue components and Vue components in markdown (just like VuePress/VitePress), automatic page routing, and automatic component loading and pre-compiling.

### The Nuxt 3 Stack

The {{ stack3 }} is a powerful combo with Nuxt 3, Vue 3, Tailwind CSS, and VueVentus all acting together for a really fast and flexible way to develop a web app or even an interaction-heavy website. Nuxt 3 is Typescript based by default.







## Core Deps

The core deps for each stack are generally pretty similar, but here's a table of the major app development specific dependencies to visualize the stacks themselves better:

| Primary Deps                                                                         | SPA Stack | SSG Stack | Nuxt 3 Stack  |
|--------------------------------------------------------------------------------------|:---------:|:---------:|:-------------:|
| [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)             |     🟢     |     🟢    |       🟢      |
| [Vue.js](https://vuejs.org/)                                                         |     🟢     |     🟢    |       🟢      |
| [Tailwind CSS](https://tailwindcss.com/)                                             |     🟢     |     🟢    |       🔵      |
| [@nuxtjs/tailwindcss](https://nuxt.com/modules/tailwindcss)                          |     🔴     |     🔴    |       🟢      |
| [Headless UI (Vue)](https://headlessui.com/)                                         |     🟢     |     🟢    |       🔵      |
| [nuxt-headlessui](https://nuxt.com/modules/headlessui)                               |     🔴     |     🔴    |       🟢      |
| [@headlessui/tailwindcss](https://www.npmjs.com/package/@headlessui/tailwindcss)     |     🟢     |     🟢    |       🟢      |
| [Heroicons](https://heroicons.com/)                                                  |     🟡     |     🟡    |       🔴      |
| [@tailwindcss/aspect-ratio](https://www.npmjs.com/package/@tailwindcss/aspect-ratio) |     🟢     |     🟢    |       🟢      |
| [@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms)               |     🟢     |     🟢    |       🟢      |
| [@tailwindcss/line-clamp](https://www.npmjs.com/package/@tailwindcss/line-clamp)     |     🟢     |     🟢    |       🟢      |
| [@tailwindcss/typography](https://www.npmjs.com/package/@tailwindcss/typography)     |     🟢     |     🟢    |       🟢      |
| [vue-router](https://router.vuejs.org/)                                              |     🟢     |     🟢    |       🔵      |
| [Typescript](https://www.typescriptlang.org/)                                        |     🟢     |     🟢    |       🟢      |
| [Vitest](https://vitest.dev/)                                                        |     🟢     |     🟢    |       🔵      |
| [nuxt-vitest](https://vitest.dev/)                                                   |     🔴     |     🔴    |      Soon     |
| [Vue Test Utils](https://test-utils.vuejs.org/guide/)                                |     🟢     |     🟢    |      ???      |
| [@vitest/coverage-c8](https://www.npmjs.com/package/@vitest/coverage-c8)             |     🟢     |     🟢    |      ???      |
| [happy-dom](https://github.com/capricorn86/happy-dom)                                |     🟢     |     🟢    |       🔵      |
| [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue)               |     🟢     |     🟢    |       🔴      |
| [Vite-SSG](https://github.com/antfu/vite-ssg)                                        |     🔴     |     🟢    |       🔴      |
| [Pinia](https://pinia.vuejs.org/)                                                    |     🔴     |     🟢    |       🔵      |
| [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-md)                  |     🔴     |     🟢    |       🔴      |
| [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)                   |     🔴     |     🟢    |       🔴      |
| [unplugin-vue-components/vite](https://github.com/antfu/unplugin-vue-components)     |     🔴     |     🟢    |       🔴      |
| [Prism.js](https://prismjs.com/)                                                     |     🟡     |     🟡    |      Soon     |
| [prism-theme-vars](https://github.com/antfu/prism-theme-vars)                        |     🟡     |     🟡    |      Soon     |
| [FontAwesome Free](https://fontawesome.com/)                                         |     🟡     |     🟡    |      Soon     |
| [FontAwesome Pro](https://fontawesome.com/)                                          |     🟠     |     🟠    |      Soon     |
| [GSAP](https://greensock.com/gsap/)                                                  |     🟡     |     🟡    |      Soon     |


🔵 = Installed via Nuxt 3 or a Nuxt 3 Module
🟢 = Installed by default  
🟡 = Optional (opt-out) dependency  
🟠 = License number required on install  
🔴 = Not available in stack installation  






















## Getting Started

To get started, add a directory for your project and navigate to it through your console/terminal.

Once in your project directory, go ahead and initialize npm and follow the prompts after running:

```bash
npm init
```








## Installing VueVentus

Next up, go ahead and install VueVentus with the command:

```bash
npm install @obewds/vueventus
```








## Starting the CLI

To start up the VueVentus CLI installation process, run the command:

```bash
npx vueventus
```

From there you can follow the prompts and ultimately install your stack and deps.

::: warning WIP
The VueVentus CLI is still **slightly** experimental right now, but is stable for the SPA and SSG project kickoff installations. It's especially stable when installing the whole stack with all deps.

So for now and with testing still ongoing for each opt-out option to be removed freely, it's better to take the approach to install it all. Then you can prune out what you don't need after fully designing and building your polished prototype or even your prod-ready app.
:::








## Starting Your App

To start up your installed app, use the standard Vite `dev` npm script command:

```bash
npm run dev
```








## Running Vitest

To run your app's tests, use the standard Vitest `test` npm script command:

```bash
npm run test
```

Or to run a coverage report, use:

```bash
npm run coverage
```











## SPA Stack: Installed File Structure

{{ stack1 }} Stack:

```
.
├─ .vscode
│  └─ settings.json
├─ public
│  ├─ .htaccess
│  └─ vite.svg
├─ src
│  ├─ assets
│  │  ├─ logo-obe.svg
│  │  ├─ logo-pinia.svg
│  │  ├─ logo-tailwindcss.svg
│  │  ├─ logo-typescript.svg
│  │  ├─ logo-vite.svg
│  │  ├─ logo-vue.svg
│  │  └─ vue.svg
│  ├─ components
│  │  ├─ vv
│  │  │  ├─ anchors
│  │  │  │  ├─ VvAnchor.vue
│  │  │  │  └─ VvRouterLink.vue
│  │  │  ├─ buttons
│  │  │  │  ├─ VvButton.vue
│  │  │  │  ├─ VvColorModeButton.vue
│  │  │  │  └─ VvScrollUp.vue 🟡
│  │  │  ├─ elements
│  │  │  │  ├─ VvFa.vue 🟡
│  │  │  │  ├─ VvEl.vue
│  │  │  │  ├─ VvPrism.vue 🟡
│  │  │  │  └─ VvPrismVars.vue 🟡
│  │  │  ├─ forms
│  │  │  │  ├─ VvFormGroup.vue
│  │  │  │  └─ VvQuadFormGroup.vue
│  │  │  ├─ inputs
│  │  │  │  ├─ VvCheckbox.vue
│  │  │  │  ├─ VvInput.vue
│  │  │  │  └─ VvRadio.vue
│  │  │  ├─ lists
│  │  │  │  ├─ VvList.vue
│  │  │  │  └─ VvListItem.vue
│  │  │  ├─ selects
│  │  │  │  ├─ VvListbox.vue
│  │  │  │  └─ VvSelect.vue
│  │  │  └─ textareas
│  │  │     └─ VvTextarea.vue
│  │  └─ HelloVueVentus.vue
│  ├─ css
│  │  ├─ prism-theme-vars.css 🟡
│  │  └─ tailwind.css
│  ├─ pages
│  │  ├─ Home.vue
│  │  └─ NotFound404.vue
│  ├─ router
│  │  └─ routes.ts
│  ├─ app.colors.json
│  ├─ App.vue
│  ├─ app.vv.ts
│  ├─ fontAwesome.ts/fontAwesomePro.ts 🟡/🟠
│  ├─ gsap.ts 🟡
│  ├─ main.ts
│  └─ vite-env.d.ts
├─ tests
│  ├─ components
│  │  ├─ vv
│  │  │  ├─ anchors
│  │  │  │  ├─ VvAnchor.test.js
│  │  │  │  └─ VvRouterLink.test.js
│  │  │  ├─ buttons
│  │  │  │  ├─ VvButton.test.js
│  │  │  │  ├─ VvColorModeButton.test.js
│  │  │  │  └─ VvScrollUp.test.js 🟡
│  │  │  ├─ elements
│  │  │  │  ├─ VvEl.test.js
│  │  │  │  ├─ VvFa.test.js 🟡
│  │  │  │  ├─ VvPrism.test.js 🟡
│  │  │  │  └─ VvPrismVars.test.js 🟡
│  │  │  ├─ forms
│  │  │  │  ├─ VvFormGroup.test.js
│  │  │  │  └─ VvQuadFormGroup.test.js
│  │  │  ├─ inputs
│  │  │  │  ├─ VvCheckbox.test.js
│  │  │  │  ├─ VvInput.test.js
│  │  │  │  └─ VvRadio.test.js
│  │  │  ├─ lists
│  │  │  │  ├─ VvList.test.js
│  │  │  │  └─ VvListItem.test.js
│  │  │  ├─ selects
│  │  │  │  ├─ VvListbox.test.js
│  │  │  │  └─ VvSelect.test.js
│  │  │  └─ textareas
│  │  │     └─ VvListItem.test.js
│  │  └─ HelloVueVentus.test.js
│  └─ pages
│     ├─ Home.test.js
│     └─ NotFound404.test.js
├─ .gitignore
├─ .npmrc 🟡 (FontAwesome Pro only)
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ README-VITE.md
├─ tailwind.config.cjs
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ vitest.config.ts
```

🟡 = Optional (opt-out) dependency  
🟠 = License number required on install  











## SSG Stack: Installed File Structure

{{ stack2 }} Stack:

```
.
├─ .vscode
│  └─ settings.json
├─ public
│  └─ .htaccess
├─ src
│  ├─ assets
│  │  ├─ logo-obe.svg
│  │  ├─ logo-pinia.svg
│  │  ├─ logo-tailwindcss.svg
│  │  ├─ logo-typescript.svg
│  │  ├─ logo-vite.svg
│  │  ├─ logo-vue.svg
│  │  └─ vue.svg
│  ├─ components
│  │  ├─ vv
│  │  │  ├─ anchors
│  │  │  │  ├─ VvAnchor.vue
│  │  │  │  └─ VvRouterLink.vue
│  │  │  ├─ buttons
│  │  │  │  ├─ VvButton.vue
│  │  │  │  ├─ VvColorModeButton.vue
│  │  │  │  └─ VvScrollUp.vue 🟡
│  │  │  ├─ elements
│  │  │  │  ├─ VvEl.vue
│  │  │  │  ├─ VvFa.vue 🟡
│  │  │  │  ├─ VvPrism.vue 🟡
│  │  │  │  └─ VvPrismVars.vue 🟡
│  │  │  ├─ forms
│  │  │  │  ├─ VvFormGroup.vue
│  │  │  │  └─ VvQuadFormGroup.vue
│  │  │  ├─ inputs
│  │  │  │  ├─ VvCheckbox.vue
│  │  │  │  ├─ VvInput.vue
│  │  │  │  └─ VvRadio.vue
│  │  │  ├─ lists
│  │  │  │  ├─ VvList.vue
│  │  │  │  └─ VvListItem.vue
│  │  │  ├─ selects
│  │  │  │  ├─ VvListbox.vue
│  │  │  │  └─ VvSelect.vue
│  │  │  └─ textareas
│  │  │     └─ VvTextarea.vue
│  │  ├─ Counter.vue
│  │  ├─ HelloVueVentus.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ Counter.vue
│  │  └─ MousePos.vue
│  ├─ css
│  │  ├─ prism-theme-vars.css 🟡
│  │  └─ tailwind.css
│  ├─ pages
│  │  ├─ nested
│  │  │  └─ deep
│  │  │     └─ b.md
│  │  ├─ [...all].vue
│  │  ├─ a.md
│  │  ├─ b.vue
│  │  └─ index.md
│  ├─ store
│  │  └─ root.ts
│  ├─ router
│  │  └─ routes.ts
│  ├─ app.colors.json
│  ├─ App.vue
│  ├─ app.vv.ts
│  ├─ fontAwesome.ts/fontAwesomePro.ts 🟡/🟠
│  ├─ gsap.ts 🟡
│  ├─ main.ts
│  └─ vite-env.d.ts
├─ tests
│  ├─ components
│  │  ├─ vv
│  │  │  ├─ anchors
│  │  │  │  ├─ VvAnchor.test.js
│  │  │  │  └─ VvRouterLink.test.js
│  │  │  ├─ buttons
│  │  │  │  ├─ VvButton.test.js
│  │  │  │  ├─ VvColorModeButton.test.js
│  │  │  │  └─ VvScrollUp.test.js 🟡
│  │  │  ├─ elements
│  │  │  │  ├─ VvEl.test.js
│  │  │  │  ├─ VvFa.test.js 🟡
│  │  │  │  ├─ VvPrism.test.js 🟡
│  │  │  │  └─ VvPrismVars.test.js 🟡
│  │  │  ├─ forms
│  │  │  │  ├─ VvFormGroup.test.js
│  │  │  │  └─ VvQuadFormGroup.test.js
│  │  │  ├─ inputs
│  │  │  │  ├─ VvCheckbox.test.js
│  │  │  │  ├─ VvInput.test.js
│  │  │  │  └─ VvRadio.test.js
│  │  │  ├─ lists
│  │  │  │  ├─ VvList.test.js
│  │  │  │  └─ VvListItem.test.js
│  │  │  ├─ selects
│  │  │  │  ├─ VvListbox.test.js
│  │  │  │  └─ VvSelect.test.js
│  │  │  └─ textareas
│  │  │     └─ VvListItem.test.js
│  │  └─ HelloVueVentus.test.js
│  └─ pages
│     └─ b.test.js
├─ .gitignore
├─ .npmrc 🟡 (FontAwesome Pro only)
├─ components.d.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ README-VITE.md
├─ tailwind.config.cjs
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ vitest.config.ts
```

🟡 = Optional (opt-out) dependency  
🟠 = License number required on install  











## Nuxt 3 Stack: Installed File Structure

{{ stack3 }} Stack:

```
.
├─ .nuxt (generated after running npm run dev or npm run build)
│  └─ ... nuxt stuff
├─ .vscode
│  └─ settings.json
├─ components
│  └─ Vv
│     ├─ Anchor.vue
│     ├─ Button.vue
│     ├─ Checkbox.vue
│     ├─ ColorModeButton.vue
│     ├─ El.vue
│     ├─ FormGroup.vue
│     ├─ Input.vue
│     ├─ Listbox.vue
│     ├─ ListItem.vue
│     ├─ QuadFormGroup.vue
│     ├─ Radio.vue
│     ├─ Select.vue
│     └─ Textarea.vue
├─ pages
│  └─ index.vue
├─ public
│  ├─ js
│  │  └─ on-page-load-color-modes.js
│  └─ favicon.ico
├─ .gitignore
├─ .npmrc
├─ app.colors.json
├─ app.vue
├─ app.vv.ts
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ README-NUXT.md
├─ tailwind.config.ts
└─ tsconfig.json
```

🟡 = Optional (opt-out) dependency  
🟠 = License number required on install  











## Moving Forward

Moving forward, the addition of the other stacks is dependent upon figuring out the best way to manage all the little specifics and especially snippets for optional dependencies in the files that exist in all of the stacks.

The goal is to have the CLI eventually help Vue devs to install the following stacks, for development goodness and truly scalable styling management:

1. The SPA Stack (implemented)
1. The SSG Stack (implemented)
1. The Nuxt 3 Stack (WIP)
1. The Firebase Stack
1. The VILT Stack






!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
