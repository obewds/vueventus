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

If you're already a fan of managing large HTML and CSS projects with atomic classes, then you already know what the main pain point is:

Very long strings of atomic CSS classes!_ :scream:

Add to that problem the inherently tricky and commonplace need to abstract common strings for reuse, and things always seem to end up in a tough decision between:

* Should I abstract this string? :thinking: 
* Or just plan on a future find/replace? :thinking: 

That fork in the road is exactly where VueVentus begins.



## The Solution

To help manage this "abstract or not" conundrum, VueVentus takes a simple and modular approach.

VueVentus is a "design system" layer of both components and utility modules for modern web applications. It is designed to weave the advantages of Tailwind CSS into the natural flow and Developer Experience (DX) of modern app development. 

This position and these abstractions provide modular and component focused management of the many different types of repeated strings and even JavaScript primitives that occur in everyday app development. ***(Not stateful JavaScript primitives... but static global data... is super easy to add in a pinch!).*** :lobster:

::: tip
VueVentus is highly opinionated from a programmatic POV. But from a design POV, VueVentus is intensely customizable and powerful, because it uses obsessively DRY programmatic approaches under the hood.

Then from that point, the system provides basic getters to allow devs to reach into the system with a minimal cognitive load, but all while still allowing a dev the ability to override anything on a micro or instance-only level. Enter Typescript!
:::







## Why Learn VueVentus?

There is a learning curve to be able to fully customize the visual aesthetics of a modern web application through VueVentus's abstractions.

However, a major reason for these abstractions, is to make rapid prototyping efficient/logical for devs and iteratively fast/flexible for designers.

The complexity and learning curve only applies to the need to make surgical component-level edits or global component-wide edits well into the production process for:

* Major Design changes
* Last Minute Feature call-outs
* Accessibility and Fire Drill updates
* Branding
* Full Re-designs
* Legal call-outs

VueVentus handles these normally expensive/arduous issues in stride - and incredibly quickly with practice. The trick lies in leveraging the system's centralization of the overall landscape of atomic string patterns that occur in any given web app.

> This centralization allows designers to make sweeping changes to the "feel" of the app's tones in both dark and light mode contexts... but completely abstracted away from the code that designers just don't like to deal with. With VueVentus this is all centralized, and thanks to Tailwind CSS, it's also human readable! :wink:

VueVentus aims to **empower** designers to work closer to the code and repository workflows, and **reward** devs with a vernacular consistency that designers don't need to change, because it's already grouped into vernacular that designers understand. 

> And thanks to Typescript/JavaScript and VueVentus modules, all of this can be peeked into, overridden and type-checked on both global and instance-only scales.

Basically, VueVentus starts as an initial static data store for rapid prototyping, and then incrementally overridden into a structural blueprint for DRYness, alongside that prototype's transformation into a production app.

The payoff is easy and fast sweeping changes, even late in the game, and a pattern that scales across different app code bases easily. All together, this leads to incredibly DRY and efficiently re-designable apps and components. :heart_eyes:

::: tip
Over time, VueVentus defaults should be replaced as needed by a custom configuration file (or files) that follow the [VvConfig](/modules/configs/vv-config) structure.

In most cases, an app's custom configs are merged with VueVentus defaults at app start. In the case of Vue.js v3, the merged config data should then use the `provide()`/`inject()` pattern to pass the merged data down to app layouts, components and modules.
:::






<DocsPackageVersion/>
