import type { PropType } from 'vue';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { SizesTextareas } from '../../types/SizesTextareas';
import type { SizesTextareasRows } from '../../types/SizesTextareasRows';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    size: {
        type: PropType<keyof SizesTextareas>;
        default: keyof SizesTextareas;
    };
    rowSize: {
        type: PropType<keyof SizesTextareasRows>;
        default: keyof SizesTextareasRows;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    rows: import("vue").ComputedRef<number | undefined>;
    handleTextareaChange: (event: Event) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: keyof DefaultValidationPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    size: {
        type: PropType<keyof SizesTextareas>;
        default: keyof SizesTextareas;
    };
    rowSize: {
        type: PropType<keyof SizesTextareasRows>;
        default: keyof SizesTextareasRows;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    palette: keyof DefaultValidationPalettes;
    size: keyof SizesTextareas;
    modelValue: string;
    rowSize: keyof SizesTextareasRows;
}>;
export default _default;
