---
title: vueventus CLI
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import cliData from '../../cli/helpers/cliData.mjs'

    let stackKeys = Object.keys(cliData.stacks)
    let stackNames = []
    for (let i=0; i < stackKeys.length; i++) {
        stackNames.push(cliData.stacks[stackKeys[i]].name)
    }
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up a project with the vueventus CLI.









## Core Stacks

For now, the CLI can install the following stacks to kickoff app development:

1. SPA Stack: **{{ stackNames[0] }}**
1. SSG Stack: **{{ stackNames[1] }}**

### The SPA Stack

The {{ stackNames[0] }} is a classic Vue 3 via a Vite install option setup for Single Page App development. It's Typescript based and installs with pre-configured Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

### The SSG Stack

The {{ stackNames[1] }} is a SSR-friendly Static Site Generator setup for Vue 3 that's powered by Vite-SSG and Vite.js. It's also Typescript based and installs with pre-configured Pinia for stores. The stack also brings in the Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.

The SSG stack additionally incorporates Markdown, Pages, and Unplugin-like functionality in the development stack, allowing for markdown in Vue components and Vue components in markdown (just like VuePress/VitePress), automatic page routing, and automatic component loading and pre-compiling.







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
| [Typescript](https://www.typescriptlang.org/)                                        |     🟢     |     🟢    |
| [Vitest](https://vitest.dev/)                                                        |     🟢     |     🟢    |
| [Vue Test Utils](https://test-utils.vuejs.org/guide/)                                |     🟢     |     🟢    |
| [c8](https://github.com/bcoe/c8)                                                     |     🟢     |     🟢    |
| [happy-dom](https://github.com/capricorn86/happy-dom)                                |     🟢     |     🟢    |
| [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue)               |     🟢     |     🟢    |
| [Vite-SSG](https://github.com/antfu/vite-ssg)                                        |     🔴     |     🟢    |
| [Pinia](https://pinia.vuejs.org/)                                                    |     🔴     |     🟢    |
| [vue-router](https://router.vuejs.org/)                                              |     🔴     |     🟢    |
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
