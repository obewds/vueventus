<!-- ./src/views/compos/DevConfigPres.vue -->

<script setup lang="ts">

    import globals from '../../globals'
    import VvEl from '../../components/elements/VvEl.vue'

    const props = defineProps({
        data: {
            type: Object,
            required: true,
        },
    })

    const tw = globals.classes

</script>


<template>

    <div>
        
        <VvEl tag="pre" ground-palette="console" ground-color="primary" :class="tw.configPre">

            <code>{{ Object.getOwnPropertyNames(data) }}</code>

        </VvEl>

        <VvEl tag="pre" ground-palette="console" ground-color="success" :class="tw.configPre">

            <code>{{ data }}</code>

        </VvEl>

    </div>
    

</template>