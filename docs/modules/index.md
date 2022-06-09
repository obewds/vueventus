---
title: Component Modules
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>




<DocsAnimatedLogoSection/>





# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

{{ $frontmatter.title }} are JavaScript modules that act as the conduits between global Tailwind CSS string groups of classes in a default/prototypal secnario, and conversely as a blueprint for composing an [app specific config](/modules/configs/app-specific-config) file to replace any/all VueVentus default Tailwind CSS string groups for an application's own branding and app specific config settings.



* [Tailwind Modules](/modules/data/)
* [Config Modules](/modules/configs/)
* [Palette Modules](/modules/palettes/)
* [Helper Modules](/modules/helpers/)






<DocsPackageVersion/>
