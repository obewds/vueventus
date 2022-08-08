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

This guide will walk through how to individually install/update VueVentus files with the vv-update CLI.







## Getting Started

Assuming you already have a Vue project scaffolded, you can start the vv-update CLI with the command:

```bash
npx vv-update
```









## Choose Your Stack

Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. These are the currently supported stacks:

1. The SPA Stack: **{{ stackNames[0] }}**
1. The SSG Stack: **{{ stackNames[1] }}**








## Installing VueVentus

Next up, go ahead and install VueVentus with the command:

```bash
npm install @obewds/vueventus
```








## Selecting a File

From there you can follow the prompts and ultimately select a specific file to install into the location that file is intended to be according to your chosen stack.

:::danger FILES ARE OVERWRITTEN
Please note that the vv-update CLI doesn't care if you've worked hard on customizing a VueVentus or app file, and the CLI will overwrite a file you choose to install/update if it already exists!
:::








!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
