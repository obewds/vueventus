// ./cli/generators/vvFaVueNuxtFile.mjs

export default function () {

return `<!-- ./components/Vv/Fa.vue -->

<script lang="ts">

    import type { PropType } from 'vue'

    import { defineComponent } from 'vue'
    import { ValidFontAwesomeFamilies, ValidFontAwesomeSizes } from '@obewds/vueventus'
    import appVv from '../../app.vv'

    export default defineComponent({

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
    <ClientOnly>
        <font-awesome-icon
            :icon="[family, icon]"
            :size="size"
            :data-vv-fa-prop-family="debug ? family : null"
            :data-vv-fa-prop-icon="debug ? icon : null"
            :data-vv-fa-prop-size="debug ? size : null"
        />
    </ClientOnly>
</template>

`

}
