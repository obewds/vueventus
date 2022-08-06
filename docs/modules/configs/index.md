---
title: Config Modules
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import SvgDiagramVueVentusFlow from '../../../src/views/compos/SvgDiagramVueVentusFlow.vue'
</script>





# {{ $frontmatter.title }}

!!!include(snippets/alphaStageWarning.md)!!!

{{ $frontmatter.title }} keep reusable and customizable groups of non-color orientated Tailwind CSS classes for use in element, component, and layout levels of an application.



* [app.vv File](/modules/configs/app-vv)
* [VvConfig](/modules/configs/vv-config)
* [Anchors Config](/modules/configs/anchors)
* [Buttons Config](/modules/configs/buttons)
* [ColorModes Config](/modules/configs/color-modes)
* [Inputs Config](/modules/configs/inputs)
* [Text Config](/modules/configs/text)
* [Textareas Config](/modules/configs/textareas)
* [Transitions Config](/modules/configs/transitions)
* [VvComponentDefaults](/modules/configs/vv-component-defaults)



::: info ABOUT CONFIG MODULES
{{ $frontmatter.title }} are like the Tailwind CSS `@apply` directive, but are instead managed outside of the CSS scope. {{ $frontmatter.title }} rely on the Tailwind purge process, which allows JavaScript and JSON atomic classes data to be used throughout the JavaScript stack in a fully DRY way.
:::








!!!include(snippets/theVueVentusFlow.md)!!!

<SvgDiagramVueVentusFlow class="w-full"/>








<DocsPackageVersion/>
