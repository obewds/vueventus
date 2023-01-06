import ValidInputTypes from '../../validators/ValidInputTypes';
import type { PropType } from 'vue';
import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { SizesInputs } from '../../types/SizesInputs';
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
    size: {
        type: PropType<keyof SizesInputs>;
        default: keyof SizesInputs;
    };
    type: {
        type: PropType<"number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url">;
        default: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    handleInputChange: (event: Event) => string;
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
    size: {
        type: PropType<keyof SizesInputs>;
        default: keyof SizesInputs;
    };
    type: {
        type: PropType<"number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url">;
        default: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    debug: boolean;
    palette: keyof DefaultValidationPalettes;
    type: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
    size: keyof SizesInputs;
    modelValue: string;
}>;
export default _default;
