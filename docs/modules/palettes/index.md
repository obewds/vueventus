---
title: Palette Config Modules
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

{{ $frontmatter.title }} are subset of config modules specifically meant for atomic color class groupings. They are intended to be used with contextual language to humanize visual color state classes for various states of application elements.


* [AnchorDefault](/modules/palettes/anchor-default)
* [BorderDefault](/modules/palettes/border-default)
* [ButtonOutline](/modules/palettes/button-outline)
* [ButtonSolid](/modules/palettes/button-solid)
* [GroundConsole](/modules/palettes/ground-console)
* [GroundDefault](/modules/palettes/ground-default)
* [GroundMonochromatic](/modules/palettes/ground-monochromatic)
* [GroundPastel](/modules/palettes/ground-pastel)
* [InputValidation](/modules/palettes/input-validation)
* [TextDefault](/modules/palettes/text-default)


::: info ABOUT PALETTE MODULES
{{ $frontmatter.title }} are also like the Tailwind CSS `@apply` directive, but specifically for the color CSS characteristics. Like all Config Modules, this means CSS values data isn't stuck inside CSS files or syntax. So the data can exist outside of the scope of CSS, and enjoy the flexibility of JS/JSON color data throughout the stack.
:::







## Global Element Color palettes

It's worth noting that in the VueVentus premise, there are a handful of special element design/visual orientated characteristics that are considered "global" or "universal" from a design system hierarchical POV.

These traits are considered "global" because they could in theory be applied to any given html element (inline, block level, empty elements, etc.) on the markup side of things, and they are also typically definable on the CSS side of things for any element as well.

::: tip
These global characteristics are why a component like the [VvEl](/components/elements/vv-el) component exists!
:::

This idea is simple, but the ramifications are... boundless.

So in a nutshell, a component like the [VvEl](/components/elements/vv-el) component has access to the "global" palettes for the following characteristics:

* Borders
* Grounds (aka Background or bg)
* Text

This means you can access color palettes for the characteristics above at any time and in any combination. In theory, child elements also made using a component like or inherited from the [VvEl](/components/elements/vv-el) component, could also have the same palettes access.

When used in combination and with parents and children, there's a staggering amount of color control and interface complexity that becomes possible by leveraging strategic and state-focused _groups_ of atomic classes.










## Ground & Text Palette Overlaps

::: warning 
Be aware that due to accessibility being a highest order concept in the VueVentus premise, there is a sometimes confusing overlap in two of the global palette characteristics: **Grounds** and **Text**.
:::

In short, grounds should have some text accessibility built in by default. Meaning dark ground palette colors should also have light text colored atomic classes. And light grounds should have dark text colored classes by default. This way, when a component applies a ground palette color, the contained text content is accessible by default, too.

Now in the case of a parent element with a ground palette color specified, you would then want to use a child element component to further control the palette color of text within a ground palette parent. This way, it's an explicit decision to make text less accessible than the design principles established in the ground palette of the parent.

::: tip
The VueVentus system follows this pattern to allow for the most amount of flexibility with the least amount of liability (and the least amount of overall atomic classes)!
:::




<DocsPackageVersion/>
