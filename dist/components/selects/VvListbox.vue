<!-- ./src/components/selects/VvListbox.vue -->


<script lang="ts">

    import { computed, defineComponent, inject, ref } from 'vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption } from '@headlessui/vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { VvListboxData } from '../../types/VvListboxData'

    export default defineComponent({

        name: 'VvListbox',

        emits: ['update:modelValue'],

        components: {
            Listbox,
            ListboxButton,
            ListboxLabel,
            ListboxOptions,
            ListboxOption,
        },

        props: {
            data: {
                type: Array as PropType<Array<VvListboxData>>,
                default: VvConfig.defaults.VvListbox.data,
            },
            displayClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.displayClasses,
            },
            displayDisabledClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.displayDisabledClasses,
            },
            iconDisabledClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.iconDisabledClasses,
            },
            iconSelectedClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.iconSelectedClasses,
            },
            iconsSizeClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.iconsSizeClasses,
            },
            label: {
                type: String,
                default: VvConfig.defaults.VvListbox.label,
            },
            labelClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.labelClasses,
            },
            listboxButtonClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxButtonClasses,
            },
            listboxButtonColor: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxButtonColor,
            },
            listboxButtonPalette: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxButtonPalette,
            },
            listboxOptionClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionClasses,
            },
            listboxOptionColor: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionColor,
            },
            listboxOptionPalette: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionPalette,
            },
            listboxOptionsClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionsClasses,
            },
            listboxOptionsWithLabelSpacing: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionsWithLabelSpacing,
            },
            listboxOptionsWithoutLabelSpacing: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionsWithoutLabelSpacing,
            },
            optionIconParentClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.optionIconParentClasses,
            },
            selectedDisplayClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.selectedDisplayClasses,
            },
            selectedIndex: {
                type: Number,
                default: VvConfig.defaults.VvListbox.selectedIndex,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvListbox.size,
            },
        },

        setup (props) {

            const selectData = ref(props.data)

            const selectedItem = ref(selectData.value[props.selectedIndex])

            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            const listboxButtonVvClasses = computed( () => {

                let output: string[] = []

                if ( vv?.listboxes?.base() ) {
                    output.push( vv.listboxes.base() )
                }

                if ( props.size !== '' && vv?.listboxes?.sizes?.[props.size] ) {
                    output.push( vv.listboxes.sizes[props.size] as string )
                }

                if ( vv?.listboxes?.buttonPalettes?.[props.listboxButtonPalette as keyof typeof vv.listboxes.buttonPalettes]?.[props.listboxButtonColor] ) {
                    output.push( vv.listboxes.buttonPalettes[props.listboxButtonPalette as keyof typeof vv.listboxes.buttonPalettes][props.listboxButtonColor] as string )
                }

                return output.join(' ').trim()

            })

            const listboxOptionVvClasses = computed( () => {

                let output = ''

                if ( vv?.listboxes?.optionPalettes?.[props.listboxOptionPalette as keyof typeof vv.listboxes.optionPalettes]?.[props.listboxOptionColor] ) {
                    output = String(vv.listboxes.optionPalettes[props.listboxOptionPalette as keyof typeof vv.listboxes.optionPalettes][props.listboxOptionColor])
                }

                return output

            })

            return {
                listboxButtonVvClasses,
                listboxOptionVvClasses,
                selectData,
                selectedItem,
                VvConfig
            }

        },

    })

</script>


<template>

    <Listbox
        v-model="selectedItem"
        @update:modelValue="value => $emit('update:modelValue', value)"
        by="id"
    >
        <template v-if="label.length > 0">
            <ListboxLabel :class="labelClasses">
                <slot>{{ label }}</slot>
            </ListboxLabel>
        </template>
        <template v-else>
            <ListboxLabel :class="labelClasses">
                <slot/>
            </ListboxLabel>
        </template>
    
        <ListboxButton :class="[listboxButtonClasses, listboxButtonVvClasses]">

            <span :class="selectedDisplayClasses">
                {{ selectedItem.display }}
            </span>

            <svg
                :class="iconsSizeClasses"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

        </ListboxButton>

        <ListboxOptions :class="[listboxOptionsClasses, label.length > 0 ? listboxOptionsWithLabelSpacing : listboxOptionsWithoutLabelSpacing]">

            <template v-for="item in selectData">
            
                <ListboxOption
                    v-if="item.value !== ''"
                    :key="item.id"
                    :value="item"
                    :disabled="item.disabled"
                    :class="[listboxOptionClasses, listboxOptionVvClasses]"
                >

                    <span :class="optionIconParentClasses">

                        <svg
                            :class="['hidden ui-selected:block mr-3', iconsSizeClasses]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <svg
                            v-if="item.disabled"
                            :class="['mr-3 opacity-25', iconsSizeClasses]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>

                    </span>

                    <span :class="[displayClasses, item.disabled ? displayDisabledClasses : '']">
                        {{ item.display }}
                    </span>

                </ListboxOption>
            
            </template>
            
        </ListboxOptions>

    </Listbox>

</template>
