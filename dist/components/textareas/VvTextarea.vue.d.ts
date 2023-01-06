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
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    rowSize: {
        type: PropType<keyof SizesTextareasRows>;
        default: keyof SizesTextareasRows;
    };
    size: {
        type: PropType<keyof SizesTextareas>;
        default: keyof SizesTextareas;
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
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalettes>;
        default: keyof DefaultValidationPalettes;
    };
    rowSize: {
        type: PropType<keyof SizesTextareasRows>;
        default: keyof SizesTextareasRows;
    };
    size: {
        type: PropType<keyof SizesTextareas>;
        default: keyof SizesTextareas;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    debug: boolean;
    palette: keyof DefaultValidationPalettes;
    size: keyof SizesTextareas;
    modelValue: string;
    rowSize: keyof SizesTextareasRows;
}>;
export default _default;
