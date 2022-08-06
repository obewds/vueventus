---
title: Why VueVentus
---

<script setup>
    import DocsAnimatedLogoSection from '../../src/views/compos/DocsAnimatedLogoSection.vue'
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import SvgDiagramVueVentusFlow from '../../src/views/compos/SvgDiagramVueVentusFlow.vue'
</script>




<DocsAnimatedLogoSection/>


# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

If you're already a fan of managing large HTML and CSS projects with atomic classes, then you already know what the main pain point is:

::: danger 
Very, very long strings of atomic CSS classes! :scream:
:::

Add to that problem the inherently tricky and commonplace need to abstract common strings for reuse, and things always seem to end up in a tough decision between:

* Should I abstract this string? :thinking: 
* Or just plan on a future find/replace? :thinking: 

That fork in the road is exactly where VueVentus begins.



## The Solution

To help manage this "abstract or not" conundrum, VueVentus takes a simple and modular approach.

VueVentus is a "design system" layer of both components and utility modules for modern web applications. It is designed to weave the advantages of Tailwind CSS into the natural flow and DX of modern Vue.js app development. 

This position and the abstractions provide modular and component focused management of the many different types of repeated strings that happen when using atomic CSS classes.

And for the initiated, even static global JavaScript primitives that occur in everyday app development can be easily added to a VueVentus global config payload. (Not stateful data... because that's what :pineapple: [Pinia](https://pinia.vuejs.org/) is for!)

::: tip
VueVentus is opinionated from a programmatic POV. But from a design POV, VueVentus is intensely customizable and powerful, because it uses obsessively DRY programmatic approaches under the hood.

That's why the system provides sets of getters to allow devs to reach into the system with a minimal cognitive load, but all while still allowing a dev the ability to override anything on macro, micro or instance-only levels. Thanks of course, to Typescript! :fire:
:::







## Why Learn VueVentus?

There is a learning curve to be able to fully customize the visual aesthetics of a modern web application through VueVentus's abstractions. :nerd_face:

However, a major reason for these abstractions is to facilitate both rapid prototyping on the dev side of things and iteratively fast/flexible styling changes for the designer side of things.

The complexity and learning curve mainly apply when the need to make surgical component-level edits or global component-wide edits well into the production process due to:

* Major Design changes
* Last Minute Feature call-outs
* Accessibility and Fire Drill updates
* Branding
* Full Re-designs
* Legal call-outs

VueVentus handles these normally expensive/arduous issues surprisingly well - and incredibly quickly with practice. The trick lies in leveraging the system's centralization of the overall landscape of atomic string patterns that occur in any given web app, and sticking with it.

> This centralization allows designers to make sweeping changes to the "feel" of the app's tones in both dark and light mode contexts... but completely abstracted away from the code that designers just don't like to deal with. With VueVentus this is all centralized, and thanks to Tailwind CSS, it's also human readable! :wink:







## Project Mission

VueVentus aims to:

1. **Empower** designers to work closer to the code and repository workflows
1. **Provide** developers with full access to component and data properties giving devs the control they need to override, extend/type-check, and customize on both global and instance levels.
1. **Invite** production teams to enjoy a truly modular system allowing both devs and designers to iterate, create and mix-and-match the visual characteristics of web app components to make endlessly unique web experiences
1. **Create** a consistent and systemic vernacular that designers and developers can both logically infer to serve as a bridge between the silos of design and front end engineering through a strategically DRY styling management system

To accomplish this, VueVentus starts as an initial static data store for rapid prototyping. After that, teams can incrementally override the [VvConfig](/modules/configs/vv-config) object to taste as that same prototype matures into a production app.

The payoff is easy and fast sweeping styling changes, even late in the game, and a pattern that scales across different app code bases easily. All together, VueVentus can offer teams incredibly DRY and efficiently re-designable apps and components. :heart_eyes:

::: tip
Over time, VueVentus defaults should be replaced as needed by a custom configuration file (or files) that follow the [VvConfig](/modules/configs/vv-config) structure.

In most cases, an app's custom configs are merged with VueVentus defaults at app start. In the case of Vue.js v3, the merged config data should then use the `provide()`/`inject()` pattern to pass the merged data down to app layouts, components and modules.
:::










!!!include(snippets/theVueVentusFlow.md)!!!

<SvgDiagramVueVentusFlow class="w-full"/>






<DocsPackageVersion/>
