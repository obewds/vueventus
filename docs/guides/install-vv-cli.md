---
title: The VueVentus CLI
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up a project super fast with the VueVentus CLI.









## Core Stack

For now, the CLI is **only available for projects using the "Vue 3, Tailwind CSS, Vite & Typescript" stack**.

So the core stack to install (right now) includes:

* [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
* [Vue.js](https://vuejs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Typescript](https://www.typescriptlang.org/)









## Stack Deps

Optionally, you'll also be able to pick and install amazing Vite/Vue/Tailwind CSS friendly deps like:

* [Vitest](https://vitest.dev/)
    * [Vue Test Utils](https://test-utils.vuejs.org/guide/)
    * [c8](https://github.com/bcoe/c8)
    * [happy-dom](https://github.com/capricorn86/happy-dom)
* [FontAwesome](https://fontawesome.com/)
* [Headless UI](https://headlessui.com/)
* [Heroicons](https://heroicons.com/)
* [GSAP](https://greensock.com/gsap/)
* [Prism.js](https://prismjs.com/)

Each of the deps packages install pre-configured files (ready to tweak to taste) that are already integrated into Vite using modern plugins. Some deps come with ready-to-use components and even a test or two to speed up writing future tests with the Vitest suite.

::: info CLI On-Going
The plan/hope for the CLI aspect of VueVentus, is to keep massaging the "Vue 3, Tailwind CSS, Vite & Typescript" stack's implementation via the CLI, and get the code refactored with all of the options working perfectly regardless of what's included/excluded. For now it's best to just use it all tbh.

From there, the plan is to add additional CLI stack installations that will offer a Vue/Vite stack with no Typescript, a Nuxt 3 stack option, and a Laravel/Vite stack option, too. If all that goes well, a pre-configured Firebase option completes the overall hopes/plan for the VueVentus CLI!
:::








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

::: danger HIGHLY EXPERIMENTAL
The VueVentus CLI is **HIGHLY** experimental right now, but somewhat soon, it will be solid for the initial "Vue 3, Tailwind CSS, Vite & Typescript" stack.
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

The goal is to have the CLI work for different app stacks, much like GitHub template repos do. But having to make a repo and a name (which is kind of the hard part lol) is a hurdle in the creative process, and VueVentus seeks to give web devs and designers a sense of fluency and speed in ideation. The CLI approach is MUCH better at establishing a genuine sense of UX through DX, which hopefully helps us all to provide more value and more accessibility for all of our users.

And lastly, the CLI is crucial to have quality DX for use with both Laravel and the eventual Firebase installation options for the VueVentus CLI!






<DocsPackageVersion/>
