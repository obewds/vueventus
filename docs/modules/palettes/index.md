---
title: Palette Config Modules
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

{{ $frontmatter.title }} are subset of config modules specifically meant for atomic color class groupings. They are intented to be used with contextual language to humanize visual color state classes for various states of application elements.


* [AnchorDefault](/modules/palettes/anchor-default)
* [BorderDefault](/modules/palettes/border-default)
* [ButtonOutline](/modules/palettes/button-outline)
* [ButtonSolid](/modules/palettes/button-solid)
* [GroundConsole](/modules/palettes/ground-console)
* [GroundDefault](/modules/palettes/ground-default)
* [GroundMonochromatic](/modules/palettes/ground-monochromatic)
* [GroundPastel](/modules/palettes/ground-pastel)
* [TextDefault](/modules/palettes/text-default)


::: info ABOUT PALETTE MODULES
{{ $frontmatter.title }} are also like the Tailwind CSS `@apply` directive, but specifically for the color CSS characteristics. Like all Config Modules, this means CSS values data isn't stuck inside CSS files or syntax. So the data can exist outside of the scope of CSS, and enjoy the flexibility of JS/JSON color data throughout the stack.
:::






<DocsPackageVersion/>
