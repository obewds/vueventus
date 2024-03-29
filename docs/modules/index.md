---
title: Component Modules
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import SvgDiagramVueVentusFlow from '../../src/views/compos/SvgDiagramVueVentusFlow.vue'
</script>




<DocsAnimatedLogoSection/>





# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

{{ $frontmatter.title }} are JavaScript modules that serve various functions and data through and around VueVentus components.

* [Tailwind Data Modules](/modules/data/)
* [Config Modules](/modules/configs/)
* [Palette Modules](/modules/palettes/)
* [Helper Modules](/modules/helpers/)








!!!include(snippets/theVueVentusFlow.md)!!!

<SvgDiagramVueVentusFlow class="w-full"/>




<DocsPackageVersion/>
