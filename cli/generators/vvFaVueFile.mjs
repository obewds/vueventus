// ./cli/generators/vvFaVueFile.mjs

// TODO: delete original stubs/vite-ssg and stubs/vue-ts VvFa.vue files

export default function () {

const output = `<!-- ./src/components/vv/elements/VvFa.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { ValidFontAwesomeFamilies, ValidFontAwesomeSizes } from '@obewds/vueventus'

    export default defineComponent({

        components: { FontAwesomeIcon },

        props: {
            family: {
                type: String,
                default: 'fas',
                validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
            },
            icon: {
                type: String,
                default: 'house',
            },
            size: {
                type: String,
                default: '1x',
                validator: (prop: ValidFontAwesomeSizes) => (ValidFontAwesomeSizes).includes(prop),
            },
        },

    })

</script>


<template>

    <client-only>
        <FontAwesomeIcon :icon="[family, icon]" :size="size"/>
    </client-only>

</template>

`

return output

}
