---
title: vv-update CLI
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import cliData from '../../cli/helpers/cliData.mjs'

    let stackKeys = Object.keys(cliData.stacks)
    let stackNames = []
    for (let i=0; i < stackKeys.length; i++) {
        stackNames.push(cliData.stacks[stackKeys[i]].name)
    }
</script>






# {{ $frontmatter.title }}

This guide will walk through installing and setting up a project with the vueventus CLI.








## Installing VueVentus

Generally, you'd use the vv-update CLI with an application already using VueVentus. However, in case you may be just testing things out or for some reason don't yet have VueVentus installed, you can do so with the command:

```bash
npm install @obewds/vueventus
```






## Getting Started

Assuming you already installed VueVentus with a CLI tool or manually, you can start the vv-update CLI with the command:

```bash
npx vv-update
```









## Choose Your Stack

Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. The currently supported stacks are:

1. **SPA Stack:** {{ stackNames[0] }}
1. **SSG Stack:** {{ stackNames[1] }}








## Selecting a File

Once you've selected a stack, the vv-update CLI will present you a scrolling checklist of files, allowing you to select a specific file to install into the location that file would be installed in during a vueventus CLI installation of that same file (according to your chosen stack).

:::danger FILES ARE OVERWRITTEN
Please note that the vv-update CLI doesn't care if you've worked hard on customizing a file originally written by the vueventus CLI!

This means the vv-update CLI will **overwrite** a file if it already exists, so **always** be sure you have versioning or the ability to undo an vv-update CLI selection to **always** have a way back out of an overwrite!
:::








!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
