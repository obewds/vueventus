import ValidInputTypes from '../../validators/ValidInputTypes';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../..").DefaultValidationPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultValidationPalette;
    };
    size: {
        type: StringConstructor;
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
        type: StringConstructor;
        default: string | import("../..").DefaultValidationPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultValidationPalette;
    };
    size: {
        type: StringConstructor;
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
    color: string;
    palette: string;
    type: "number" | "text" | "time" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "search" | "tel" | "url";
    size: string;
    modelValue: string;
}>;
export default _default;
