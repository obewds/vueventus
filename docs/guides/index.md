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
* [Manual Installation](/guides/manual-installation)

<!-- * [Install with Nuxt.js 3](/guides/install-nuxt) -->

::: tip 
VueVentus is written in Typescript and with Vue SFC Composition API syntax!
:::





## Updating Installed Files

You can easily update all of your already installed VueVentus components and test files to the newest versions in one easy shot using the [vv-update-locals CLI](/guides/vv-update-locals-cli) (excluding install only files).

Additionally, you can install any file from a [vueventus CLI](/guides/vueventus-cli) installation individually using the [vv-update CLI](/guides/vv-update-cli)!

* [vv-update CLI](/guides/vv-update-cli)
* [vv-update-locals CLI](/guides/vv-update-locals-cli)










!!!include(snippets/theVueVentusFlow.md)!!!

<SvgDiagramVueVentusFlow class="w-full"/>






<DocsPackageVersion/>
