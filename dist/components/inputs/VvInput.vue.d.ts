import ValidInputTypes from '../../validators/ValidInputTypes';
import type { PropType } from 'vue';
import type { DefaultValidationPalette } from '../../types/DefaultValidationPalette';
import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors';
import type { InputsSizes } from '../../types/InputsSizes';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: string | DefaultValidationPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalette>;
        default: string | DefaultValidationPalette;
    };
    size: {
        type: PropType<keyof InputsSizes>;
        default: string;
    };
    type: {
        type: PropType<"number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url">;
        default: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    handleInputChange: (event: Event) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultValidationPaletteColors>;
        default: string | DefaultValidationPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultValidationPalette>;
        default: string | DefaultValidationPalette;
    };
    size: {
        type: PropType<keyof InputsSizes>;
        default: string;
    };
    type: {
        type: PropType<"number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url">;
        default: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: keyof DefaultValidationPaletteColors;
    palette: keyof DefaultValidationPalette;
    type: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
    size: keyof InputsSizes;
    modelValue: string;
}>;
export default _default;
