<!-- ./src/components/inputs/VvCheckbox.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvCheckbox',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvCheckbox.color,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvCheckbox.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvCheckbox.size,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            darkCheckHex: {
                type: String,
                default: '434348',
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                if ( vv?.checkboxes?.base() ) {
                    output.push( vv.checkboxes.base() )
                }

                if ( props.size !== '' && vv?.checkboxes?.sizes?.[props.size] ) {
                    output.push( vv.checkboxes.sizes[props.size] )
                }

                if ( vv?.checkboxes?.palettes?.[props.palette as keyof typeof vv.checkboxes.palettes]?.[props.color] ) {
                    output.push( vv.checkboxes.palettes[props.palette as keyof typeof vv.checkboxes.palettes][props.color] )
                }

                return output.join(' ').trim()

            })

            let darkCheckCssUrl = `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23${props.darkCheckHex} xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`

            const handleCheckboxChange = (event: Event) => {
                const target = event.target as HTMLInputElement
                const isChecked = target.checked
                if (isChecked === true) {
                    return true
                }
                return false
            }

            return {
                classes,
                handleCheckboxChange,
                darkCheckCssUrl,
            }

        },

    })

</script>


<template>
    <input
        type="checkbox"
        :class="classes"
        :checked="checked"
        @change="$emit('update:modelValue', handleCheckboxChange($event as any))"
    >
</template>


<style>

/*
Source: https://github.com/tailwindlabs/tailwindcss-forms/issues/27#issuecomment-820958958
--------------
TIP: Fill color should start with # equivalent ("%23") immediately followed by the color hex value!
*/

/* Set the svg (and thus color) of the TailwindCSS checkbox check icon */
.dark [type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23434348' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

</style>