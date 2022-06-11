---
title: Getting Started
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>




<DocsAnimatedLogoSection/>


# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

Welcome to the docs for VueVentus, a modular design system component library for Vue.js and Tailwind CSS.

You'll find lots of information and insight here covering how to use the VueVentus data flows in the contexts of Vue.js and Tailwind CSS, to end the era of massive atomic class strings.





## Installation Guides

But first, you'll need to choose your path for installation:

* [Install with Vite.js](/guides/install-vite)
* [Install with Vue CLI](/guides/install-vue-cli)
* [Install with Nuxt.js 3](/guides/install-nuxt)
* [Install with VILT Stack](/guides/install-vilt-stack)

::: warning 
VueVentus is not currently written with Typescript. There are some components like VueVentus's `VvEl` and `VvConfig` that were written in Typescript, but some pesky bugs pushed this project back into normal Vue 3 SFCs and the composition API to move forward. ¯\\_(ツ)_/¯
:::






<DocsPackageVersion/>
