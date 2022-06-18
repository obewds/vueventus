---
title: Why VueVentus
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>




<DocsAnimatedLogoSection/>


# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

If you're already a fan of the sometimes controversial way of managing large HTML and CSS projects with atomic classes, then you already know what the main pain point is... very long strings of atomic CSS classes! :scream:

Add to that problem the inherently tricky normal solution of abstracting common strings for reuse, and things always seem to end up in a tough decision between:

* Should I abstract this string? :thinking: 
* Or just plan on a future find/replace? :thinking: 

That fork in the road is exactly where VueVentus begins.



## The Solution

To help manage this common "abstract or not" conundrum, VueVentus takes a simple and modular approach.

VueVentus is a "design system" layer of both components and utility modules for modern web applications. It is designed to sit **around** the Tailwind CSS functionalities of an app and **between** the CSS and JavaScript functionalities (and DX :fist:) of Vue.js.

This position and these abstractions provide modular and component focused management of the many different types of repeated strings and JavaScript primitives that occur in everyday app development.

::: tip
VueVentus is highly opinionated from a programmatic POV. But from a design POV, VueVentus is intensely customizable and powerful, because it uses hardcore programmatic DRY approaches under the hood.
:::







## Why Learn VueVentus?

There is a learning curve to be able to fully customize the visual aesthetics of a modern web application through VueVentus's abstractions.

However, a major reason for these abstractions, is to make rapid prototyping efficient/logical for devs and iteratively fast/flexible for designers.

The complexity and learning curve only applies to the need to make surgical component-level edits or global component-wide edits well into the production process for:

* Design changes
* Feature call-outs
* Accessibility updates
* Branding reasons
* Re-designs
* Legal call-outs

In the end, VueVentus acts as an initial data store for rapid prototyping, and a structural blueprint for DRYness in production apps built with atomic classes.

::: tip
Over time, VueVentus defaults should be replaced as needed by a custom configuration file (or files) that follow the [VvConfig](/modules/configs/vv-config) structure.

In most cases, an app's custom configs are merged with VueVentus defaults at app start. In the case of Vue.js v3, the merged config data should then use the `provide()`/`inject()` pattern to pass the merged data down to app layouts, components and modules.
:::






<DocsPackageVersion/>
