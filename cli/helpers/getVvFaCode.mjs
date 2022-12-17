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
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'

    export default defineComponent({

        components: { FontAwesomeIcon },

        props: {
            family: {
                type: String as PropType<ValidFontAwesomeFamilies>,
                default: appVv.defaults.VvFa.family,
                validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
            },
            icon: {
                type: String,
                default: appVv.defaults.VvFa.icon,
            },
            size: {
                type: String as PropType<ValidFontAwesomeSizes>,
                default: appVv.defaults.VvFa.size,
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
