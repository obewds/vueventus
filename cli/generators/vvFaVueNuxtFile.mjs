// ./cli/generators/vvFaVueNuxtFile.mjs

export default function () {

return `<!-- ./components/Vv/Fa.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { ValidFontAwesomeFamilies, ValidFontAwesomeSizes } from '@obewds/vueventus'
    import appVv from '../../app.vv'

    export default defineComponent({

        components: { FontAwesomeIcon },

        props: {
            debug: {
                type: Boolean,
                default: appVv.defaults.VvFa.debug,
            },
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

    <FontAwesomeIcon
        :icon="[family, icon]"
        :size="size"
        :data-vv-fa-prop-family="debug ? family : null"
        :data-vv-fa-prop-icon="debug ? icon : null"
        :data-vv-fa-prop-size="debug ? size : null"
    />

</template>

`

}
