<!-- ./src/components/HelloWorld.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'
    import VvButton from './vv/buttons/VvButton.vue'
    import VvEl from './vv/elements/VvEl.vue'
    import VvPrism from './vv/elements/VvPrism.vue'
    import appVv from '../app.vv'

    defineProps<{ msg: string }>()

    const count = ref(0)

</script>

<template>

    <h1 class="text-2xl">{{ msg }}</h1>

    <p>
        Recommended IDE setup: <VvAnchor href="https://code.visualstudio.com/" color="success" target="_blank">VS Code</VvAnchor> + <VvAnchor href="https://github.com/johnsoncodehk/volar" color="success" target="_blank">Volar</VvAnchor>
    </p>

    <p>
        See <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">README.md</VvEl> for more information.
    </p>

    <p>
        <VvAnchor href="https://vitejs.dev/guide/features.html" color="success" target="_blank">Vite Docs</VvAnchor> | <VvAnchor href="https://v3.vuejs.org/" color="success" target="_blank">Vue 3 Docs</VvAnchor>
    </p>

    <div class="py-4">
        <VvButton color="primary" @click="count++">Count is: {{ count }}</VvButton>
    </div>

    <p>
        Edit <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">components/HelloWorld.vue</VvEl> to test hot module replacement.
    </p>

    <div class="max-w-4xl pt-12 text-left mx-auto">
    
        <p class="text-lg font-bold pb-1">Current <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">./src/app.vv.ts</VvEl> Configuration Values:</p>
    
        <VvPrism>
            <pre>
                <code class="line-numbers language-javascript">
                    {{ appVv }}
                </code>
            </pre>
        </VvPrism>
    
    </div>

</template>
