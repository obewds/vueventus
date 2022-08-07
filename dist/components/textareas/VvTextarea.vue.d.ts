declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultValidationPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultValidationPalette;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    rowSize: {
        type: StringConstructor;
        default: string;
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
        type: StringConstructor;
        default: string | import("../../index.js").DefaultValidationPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultValidationPalette;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    rowSize: {
        type: StringConstructor;
        default: string;
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
    size: string;
    modelValue: string;
    rowSize: string;
}>;
export default _default;
