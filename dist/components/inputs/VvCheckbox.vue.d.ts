import type { PropType } from 'vue';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { SizesInputs } from '../../types/SizesInputs';
declare const _default: import("vue").DefineComponent<{
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof import("../../index.js").DefaultPaletteColors;
    };
    darkCheckHex: {
        type: StringConstructor;
        default: string;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    lightCheckHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof import("../../index.js").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesInputs>;
        default: keyof SizesInputs;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    darkCheckCssUrl: import("vue").ComputedRef<string>;
    handleCheckboxChange: (event: Event) => boolean;
    lightCheckCssUrl: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof import("../../index.js").DefaultPaletteColors;
    };
    darkCheckHex: {
        type: StringConstructor;
        default: string;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    lightCheckHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof import("../../index.js").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesInputs>;
        default: keyof SizesInputs;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    debug: boolean;
    palette: keyof DefaultValidationPalettes;
    size: keyof SizesInputs;
    checked: boolean;
    darkCheckHex: string;
    lightCheckHex: string;
}>;
export default _default;
