<!-- ./src/views/compos/DocsTypingDownstreamText.vue -->

<script setup lang="ts">

    const props = defineProps({
        name: {
            type: String,
            default: '$frontmatter.title',
        },
    })

</script>


<template>

    <div class="w-full mt-3">
        If you are building a component that uses a nested {{ name }} and want to pass through strict typing into your code base when using your built component, you can add typing for Vue props like this:
    </div>

</template>
