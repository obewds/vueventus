---
title: VvNuxtLink Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import DocsTypingDownstreamText from '../../../src/views/compos/DocsTypingDownstreamText.vue'
    
    import { VvAnchor, VvConfig } from '../../../src/index'
    import appColors from '../../../src/data/app.color.data.json'

    const grayColorStyles = {
        color: appColors.gray['900']
    }
    const whiteColorStyles = {
        color: appColors.white
    }
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is modeled on the [VvAnchor](/components/anchors/vv-anchor) component, but instead uses a Nuxt 3 `NuxtLink` component/props instead of an `a` tag/props like the VvAnchor component uses.

The {{ $frontmatter.title }} provides variety of props and config module based settings to make a variety of anchor styled elements for applications with an extremely DRY implementation of atomic classes.


Complete VvNuxtLink documentation coming soon!

<!-- TODO: create VvNuxtLink component CLI scripts -->
<!-- TODO: create VvNuxtLink documentation (based on VvRouterLink) -->