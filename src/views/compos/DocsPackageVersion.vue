<!-- ./src/views/compos/DocsPackageVersion.vue -->


<script setup>

    import pkg from '../../../package.json'

</script>


<template>

    <aside class="block w-full text-center pt-12">
        <div class="opacity-50 text-xs">Current Version:</div>
        <a
            href="https://github.com/obewds/vueventus/blob/main/CHANGELOG.md"
            class="text-sm"
            target="_blank"
            rel="noopener noreferrer"
            title="View Changelog"
        >
            v{{ pkg.version }}
        </a>
    </aside>

</template>
