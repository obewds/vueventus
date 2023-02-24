// ./cli/generators/appVueNuxtFile.mjs

export default function () {

const output = `<!-- ./app.vue -->

<script setup lang="ts">

    import type { ValidColorModes } from '@obewds/vueventus'

    const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as ValidColorModes : 'light' as ValidColorModes

</script>

<template>

    <div>

        <NuxtPage/>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvScrollUp/>
                    <VvColorModeButton palette="solid" color="primary" :mode="colorMode"/>
                </div>
            </nav>
        </aside>

    </div>

</template>

`

return output
    
}
