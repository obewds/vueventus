<!-- ./src/components/selects/VvListbox.vue -->


<script lang="ts">

    // TODO: create new "as" (String) prop and defaults/types/docs/etc

    import { computed, defineComponent, inject, ref } from 'vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption } from '@headlessui/vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes'
    import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors'
    import type { SizesSelects } from '../../types/SizesSelects'
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
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvListbox.debug,
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
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: VvConfig.defaults.VvListbox.listboxButtonColor,
            },
            listboxButtonPalette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: VvConfig.defaults.VvListbox.listboxButtonPalette,
            },
            listboxOptionClasses: {
                type: String,
                default: VvConfig.defaults.VvListbox.listboxOptionClasses,
            },
            listboxOptionColor: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: VvConfig.defaults.VvListbox.listboxOptionColor,
            },
            listboxOptionPalette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
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
                type: String as PropType<keyof SizesSelects>,
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
                    output.push( String(vv.listboxes.sizes[props.size]) )
                }

                if ( vv?.listboxes?.buttonPalettes?.[props.listboxButtonPalette]?.[props.listboxButtonColor] ) {
                    output.push( String(vv.listboxes.buttonPalettes[props.listboxButtonPalette][props.listboxButtonColor]) )
                }

                return output.join(' ').trim()

            })

            const listboxOptionVvClasses = computed( () => {

                let output: string[] = []

                if ( vv?.listboxes?.optionPalettes?.[props.listboxOptionPalette]?.[props.listboxOptionColor] ) {
                    output.push( String(vv.listboxes.optionPalettes[props.listboxOptionPalette][props.listboxOptionColor]) )
                }

                return output.join(' ').trim()

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
        as="div"
        v-model="selectedItem"
        @update:modelValue="value => $emit('update:modelValue', value)"
        by="id"
    >

        <template v-if="label.length > 0">

            <ListboxLabel
                :class="labelClasses"
                :data-vv-listbox-prop-label-classes="debug ? labelClasses : null"
            >

                <slot>{{ label }}</slot>

            </ListboxLabel>

        </template>

        <template v-else>

            <ListboxLabel
                :class="labelClasses"
                :data-vv-listbox-prop-label-classes="debug ? labelClasses : null"
            >

                <slot/>

            </ListboxLabel>

        </template>
    
        <ListboxButton
            :class="[listboxButtonClasses, listboxButtonVvClasses]"
            :data-vv-listbox-prop-listbox-button-classes="debug ? listboxButtonClasses : null"
        >

            <span
                :class="selectedDisplayClasses"
                :data-vv-listbox-prop-selected-display-classes="debug ? selectedDisplayClasses : null"
            >
                {{ selectedItem.display }}
            </span>

            <svg
                :class="iconsSizeClasses"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                :data-vv-listbox-prop-icons-size-classes="debug ? iconsSizeClasses : null"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>

        </ListboxButton>

        <ListboxOptions
            :class="[listboxOptionsClasses, label.length > 0 ? listboxOptionsWithLabelSpacing : listboxOptionsWithoutLabelSpacing]"
            :data-vv-listbox-prop-listbox-options-classes="debug ? listboxOptionsClasses : null"
            :data-vv-listbox-prop-listbox-options-with-label-spacing="debug && label.length > 0 ? listboxOptionsWithLabelSpacing : null"
            :data-vv-listbox-prop-listbox-options-without-label-spacing="debug && label.length <= 0 ? listboxOptionsWithoutLabelSpacing : null"
        >

            <template v-for="item in selectData">
            
                <ListboxOption
                    v-if="item.value !== ''"
                    :key="item.id"
                    :value="item"
                    :disabled="item.disabled"
                    :class="[listboxOptionClasses, listboxOptionVvClasses]"
                    :data-vv-listbox-prop-listbox-option-classes="debug ? listboxOptionClasses : null"
                    :data-vv-listbox-prop-listbox-option-vv-classes="debug ? listboxOptionVvClasses : null"
                >

                    <span
                        :class="optionIconParentClasses"
                        :data-vv-listbox-prop-option-icon-parent-classes="debug ? optionIconParentClasses : null"
                    >

                        <svg
                            :class="['hidden ui-selected:block mr-3', iconsSizeClasses]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            :data-vv-listbox-prop-icon-size-classes="debug ? iconsSizeClasses : null"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"
                            />
                        </svg>

                        <svg
                            v-if="item.disabled"
                            :class="['mr-3 opacity-25', iconsSizeClasses]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            :data-vv-listbox-prop-icon-size-classes="debug ? iconsSizeClasses : null"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                        </svg>

                    </span>

                    <span
                        :class="[displayClasses, item.disabled ? displayDisabledClasses : '']"
                        :data-vv-listbox-prop-display-classes="debug ? displayClasses : null"
                        :data-vv-listbox-prop-display-disabled-classes="debug && item.disabled ? displayDisabledClasses : null"
                    >
                        {{ item.display }}
                    </span>

                </ListboxOption>
            
            </template>
            
        </ListboxOptions>

    </Listbox>

</template>
