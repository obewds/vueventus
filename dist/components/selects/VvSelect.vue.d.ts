import type { PropType } from 'vue';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { SizesSelects } from '../../types/SizesSelects';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    size: {
        type: PropType<keyof SizesSelects>;
        default: keyof SizesSelects;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    handleSelectChange: (event: Event) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    size: {
        type: PropType<keyof SizesSelects>;
        default: keyof SizesSelects;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    debug: boolean;
    palette: keyof DefaultValidationPalettes;
    size: keyof SizesSelects;
    modelValue: string;
}>;
export default _default;
