---
title: vv-update CLI
---

<script setup>

    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
    import cliData from '../../cli/helpers/cliData.mjs'

    const stack1 = cliData.stacks.vueTwViteTs.name
    const stack2 = cliData.stacks.vueTwViteSsgMdTs.name
    const stack3 = cliData.stacks.vueTwNuxt3.name
    
</script>






# {{ $frontmatter.title }}

The vv-update CLI is a project maintenance tool to help an existing application bring in new file updates, syntaxes, standards, types, etc. from a recent VueVentus update, into an existing VueVentus dependent application - sometime after a prior [vueventus CLI](/guides/vueventus-cli) installation.








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

1. **SPA Stack:** {{ stack1 }}
1. **SSG Stack:** {{ stack2 }}
1. **Nuxt 3 Stack:** {{ stack3 }}








## Selecting a File

Once you've selected a stack, the vv-update CLI will present you with a scrolling selection of files, allowing you to select a specific file to install into the location that file would normally be installed into during a [vueventus CLI](/guides/vueventus-cli) installation of that same file (according to your chosen stack).

:::danger FILES ARE OVERWRITTEN
Please note that the vv-update CLI doesn't care if you've worked hard on customizing a file originally generated by the [vueventus CLI](/guides/vueventus-cli)!

This means the vv-update CLI will **overwrite** a file if it already exists, so **always** be sure you have versioning or the ability to undo a vv-update CLI selection to **always** ensure you have a way back out of an overwrite!
:::








!!!include(snippets/skipToTestDrive.md)!!!






<DocsPackageVersion/>
