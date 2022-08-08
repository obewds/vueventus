---
title: Getting Started
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import SvgDiagramVueVentusFlow from '../../src/views/compos/SvgDiagramVueVentusFlow.vue'
</script>




<DocsAnimatedLogoSection/>


# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

Welcome to the docs for VueVentus, a component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps.

You'll find lots of information and insight here covering how to use the VueVentus data flows in the contexts of Vue.js and Tailwind CSS, to end the era of massive atomic class strings.





## Installation Guides

But first, you'll need to choose your path for installation:

* [vueventus CLI](/guides/vueventus-cli)
* [vv-update CLI](/guides/vv-update-cli)
* [Manual Installation](/guides/manual-installation)

<!-- * [Install with Nuxt.js 3](/guides/install-nuxt) -->

::: tip 
VueVentus is written in Typescript and with Vue SFC Composition API syntax!
:::










!!!include(snippets/theVueVentusFlow.md)!!!

<SvgDiagramVueVentusFlow class="w-full"/>






<DocsPackageVersion/>
