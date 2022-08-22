---
title: vueventus CLI
---

<script setup>

    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import cliData from '../../cli/helpers/cliData.mjs'

    const stack1 = cliData.stacks.vueTwViteTs.name
    const stack2 = cliData.stacks.vueTwViteSsgMdTs.name

</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up a project with the vueventus CLI.









## Core Stacks

For now, the CLI can install the following stacks to kickoff app development:

1. **SPA Stack:** {{ stack1 }}
1. **SSG Stack:** {{ stack2 }}

### The SPA Stack

The {{ stack1 }} is a classic Vue 3 via a Vite install option setup for Single Page App development. It's Typescript based and installs with pre-configured Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

### The SSG Stack

The {{ stack2 }} is a SSR-friendly Static Site Generator setup for Vue 3 that's powered by Vite-SSG and Vite.js. It's also Typescript based and installs with pre-configured Pinia for stores. The stack also brings in the Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

The SSG stack additionally incorporates Markdown, auto-routing Pages, and auto-loading component (Unplugin) functionality in the development stack, allowing for markdown in Vue components and Vue components in markdown (just like VuePress/VitePress), automatic page routing, and automatic component loading and pre-compiling.







## Core Deps

The core deps for each stack are generally pretty similar, but here's a table of the major app development specific dependencies to visualize the stacks themselves better:

| Primary Deps                                                                         | SPA Stack | SSG Stack |
|--------------------------------------------------------------------------------------|:---------:|:---------:|
| [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)             |     🟢     |     🟢    |
| [Vue.js](https://vuejs.org/)                                                         |     🟢     |     🟢    |
| [Tailwind CSS](https://tailwindcss.com/)                                             |     🟢     |     🟢    |
| [@tailwindcss/aspect-ratio](https://www.npmjs.com/package/@tailwindcss/aspect-ratio) |     🟢     |     🟢    |
| [@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms)               |     🟢     |     🟢    |
| [@tailwindcss/line-clamp](https://www.npmjs.com/package/@tailwindcss/line-clamp)     |     🟢     |     🟢    |
| [@tailwindcss/typography](https://www.npmjs.com/package/@tailwindcss/typography)     |     🟢     |     🟢    |
| [vue-router](https://router.vuejs.org/)                                              |     🟢     |     🟢    |
| [Typescript](https://www.typescriptlang.org/)                                        |     🟢     |     🟢    |
| [Vitest](https://vitest.dev/)                                                        |     🟢     |     🟢    |
| [Vue Test Utils](https://test-utils.vuejs.org/guide/)                                |     🟢     |     🟢    |
| [@vitest/coverage-c8](https://www.npmjs.com/package/@vitest/coverage-c8)             |     🟢     |     🟢    |
| [happy-dom](https://github.com/capricorn86/happy-dom)                                |     🟢     |     🟢    |
| [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue)               |     🟢     |     🟢    |
| [Vite-SSG](https://github.com/antfu/vite-ssg)                                        |     🔴     |     🟢    |
| [Pinia](https://pinia.vuejs.org/)                                                    |     🔴     |     🟢    |
| [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-md)                  |     🔴     |     🟢    |
| [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)                   |     🔴     |     🟢    |
| [unplugin-vue-components/vite](https://github.com/antfu/unplugin-vue-components)     |     🔴     |     🟢    |
| [Prism.js](https://prismjs.com/)                                                     |     🟡     |     🟡    |
| [prism-theme-vars](https://github.com/antfu/prism-theme-vars)                        |     🟡     |     🟡    |
| [FontAwesome Free](https://fontawesome.com/)                                         |     🟡     |     🟡    |
| [FontAwesome Pro](https://fontawesome.com/)                                          |     🟠     |     🟠    |
| [Headless UI](https://headlessui.com/)                                               |     🟡     |     🟡    |
| [Heroicons](https://heroicons.com/)                                                  |     🟡     |     🟡    |
| [GSAP](https://greensock.com/gsap/)                                                  |     🟡     |     🟡    |


🟢 = Installed by default  
🟡 = Optional (opt-out) dependency  
🟠 = License number required on install  
🔴 = Not available in stack  






















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

To start up your installed app, use the standard Vite install command:

```bash
npm run dev
```








## Running Vitest

To run your app's tests, use the standard Vitest command:

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
│  └─ .htaccess
├─ src
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
│  │  │  ├─ inputs
│  │  │  │  ├─ VvCheckbox.vue
│  │  │  │  ├─ VvInput.vue
│  │  │  │  └─ VvRadio.vue
│  │  │  ├─ lists
│  │  │  │  └─ VvListItem.vue
│  │  │  └─ textareas
│  │  │     └─ VvTextarea.vue
│  │  ├─ css
│  │  │  ├─ prism-theme-vars.css 🟡
│  │  │  └─ tailwind.css
│  │  └─ HelloVueVentus.vue
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
│  └─vite-env.d.ts
├─ tests
│  └─ components
│     └─ HelloVueVentus.test.js
├─ .gitignore
├─ .npmrc 🟡 (FontAwesome Pro only)
├─ index.html
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

Coming soon!

<!--
// TODO: complete file structure for SSG Stack files (can use above as starting point)
```
.
├─ xxxxxxxx
│  ├─ xxxxxxxx
│  └─ xxxxxxxx
├─ xxxxxxxx
└─ xxxxxxxx
```
-->












## Moving Forward

Moving forward, the addition of the other stacks is dependent upon figuring out the best way to manage all the little specifics and especially snippets for optional dependencies in the files that exist in all of the stacks.

The goal is to have the CLI eventually help Vue devs to install the following stacks, for development goodness and truly scalable styling management:

1. The SPA Stack (implemented)
1. The SSG Stack (implemented)
1. The Firebase Stack
1. The Nuxt 3 Stack
1. The VILT Stack






!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
