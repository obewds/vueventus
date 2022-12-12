// ./cli/helpers/getVvFaCode.mjs

export default function (isSsg = false) {

const template = `
    <FontAwesomeIcon :icon="[family, icon]" :size="size"/>
`
// const ssgTemplate = `
//     <client-only>
//         <FontAwesomeIcon :icon="[family, icon]" :size="size"/>
//     </client-only>
// `

let variation = template

if (isSsg === true) {
    // variation = ssgTemplate
    variation = template
}

return `<!-- ./src/components/vv/elements/VvFa.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { ValidFontAwesomeFamilies, ValidFontAwesomeSizes } from '@obewds/vueventus'

    import { PropType } from 'vue'

    export default defineComponent({

        components: { FontAwesomeIcon },

        props: {
            family: {
                type: String as PropType<ValidFontAwesomeFamilies>,
                default: 'fas',
                validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
            },
            icon: {
                type: String,
                default: 'house',
            },
            size: {
                type: String as PropType<ValidFontAwesomeSizes>,
                default: '1x',
                validator: (prop: ValidFontAwesomeSizes) => (ValidFontAwesomeSizes).includes(prop),
            },
        },

    })

</script>


<template>

${variation}

</template>

`

}
