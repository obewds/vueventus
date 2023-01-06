import type { PropType } from 'vue';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { SizesSelects } from '../../types/SizesSelects';
import type { VvListboxData } from '../../types/VvListboxData';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<VvListboxData[]>;
        default: VvListboxData[];
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayClasses: {
        type: StringConstructor;
        default: string;
    };
    displayDisabledClasses: {
        type: StringConstructor;
        default: string;
    };
    iconDisabledClasses: {
        type: StringConstructor;
        default: string;
    };
    iconSelectedClasses: {
        type: StringConstructor;
        default: string;
    };
    iconsSizeClasses: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxButtonClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxButtonColor: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    listboxButtonPalette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    listboxOptionClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionColor: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    listboxOptionPalette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    listboxOptionsClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionsWithLabelSpacing: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionsWithoutLabelSpacing: {
        type: StringConstructor;
        default: string;
    };
    optionIconParentClasses: {
        type: StringConstructor;
        default: string;
    };
    selectedDisplayClasses: {
        type: StringConstructor;
        default: string;
    };
    selectedIndex: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<keyof SizesSelects>;
        default: keyof SizesSelects;
    };
}, {
    listboxButtonVvClasses: import("vue").ComputedRef<string>;
    listboxOptionVvClasses: import("vue").ComputedRef<string>;
    selectData: import("vue").Ref<{
        [x: string]: any;
        disabled: boolean;
        display: string;
        id: string | number;
        value: any;
    }[]>;
    selectedItem: import("vue").Ref<{
        [x: string]: any;
        disabled: boolean;
        display: string;
        id: string | number;
        value: any;
    }>;
    VvConfig: import("../../index.js").ConfigVv;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<VvListboxData[]>;
        default: VvListboxData[];
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayClasses: {
        type: StringConstructor;
        default: string;
    };
    displayDisabledClasses: {
        type: StringConstructor;
        default: string;
    };
    iconDisabledClasses: {
        type: StringConstructor;
        default: string;
    };
    iconSelectedClasses: {
        type: StringConstructor;
        default: string;
    };
    iconsSizeClasses: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxButtonClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxButtonColor: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    listboxButtonPalette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    listboxOptionClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionColor: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    listboxOptionPalette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    listboxOptionsClasses: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionsWithLabelSpacing: {
        type: StringConstructor;
        default: string;
    };
    listboxOptionsWithoutLabelSpacing: {
        type: StringConstructor;
        default: string;
    };
    optionIconParentClasses: {
        type: StringConstructor;
        default: string;
    };
    selectedDisplayClasses: {
        type: StringConstructor;
        default: string;
    };
    selectedIndex: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<keyof SizesSelects>;
        default: keyof SizesSelects;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    data: VvListboxData[];
    label: string;
    debug: boolean;
    size: keyof SizesSelects;
    labelClasses: string;
    displayClasses: string;
    displayDisabledClasses: string;
    iconDisabledClasses: string;
    iconSelectedClasses: string;
    iconsSizeClasses: string;
    listboxButtonClasses: string;
    listboxButtonColor: keyof DefaultValidationPaletteColors;
    listboxButtonPalette: keyof DefaultValidationPalettes;
    listboxOptionClasses: string;
    listboxOptionColor: keyof DefaultValidationPaletteColors;
    listboxOptionPalette: keyof DefaultValidationPalettes;
    listboxOptionsClasses: string;
    listboxOptionsWithLabelSpacing: string;
    listboxOptionsWithoutLabelSpacing: string;
    optionIconParentClasses: string;
    selectedDisplayClasses: string;
    selectedIndex: number;
}>;
export default _default;
