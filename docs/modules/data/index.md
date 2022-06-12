---
title: Tailwind Modules
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

VueVentus uses {{ $frontmatter.title }} to store various raw data settings that are in-turn parsed and used by Tailwind CSS's engine to determine the syntax you'll use in your app's atomic classes.

There are currently three main types of {{ $frontmatter.title }} to use in your app's Tailwind CSS config file:

* [Theme Extenders](/modules/data/theme-extenders)
* [Theme Overrides](/modules/data/theme-overrides)
* [App Color Data](/modules/data/app-color-data)






<DocsPackageVersion/>
