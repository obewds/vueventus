import type { PropType } from 'vue';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { InputsSizes } from '../../types/InputsSizes';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof import("../../index.js").DefaultPaletteColors;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    darkRadioHex: {
        type: StringConstructor;
        default: string;
    };
    lightRadioHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof import("../../index.js").DefaultPalettes;
    };
    size: {
        type: PropType<keyof InputsSizes>;
        default: keyof import("../../index.js").SizesInputs;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    darkRadioCssUrl: import("vue").ComputedRef<string>;
    handleRadioChange: (event: Event) => boolean;
    lightRadioCssUrl: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof import("../../index.js").DefaultPaletteColors;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    darkRadioHex: {
        type: StringConstructor;
        default: string;
    };
    lightRadioHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof import("../../index.js").DefaultPalettes;
    };
    size: {
        type: PropType<keyof InputsSizes>;
        default: keyof import("../../index.js").SizesInputs;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    palette: keyof DefaultValidationPalettes;
    size: keyof InputsSizes;
    checked: boolean;
    darkRadioHex: string;
    lightRadioHex: string;
}>;
export default _default;
