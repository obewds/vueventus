declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    darkCheckHex: {
        type: StringConstructor;
        default: string;
    };
    lightCheckHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    darkCheckCssUrl: import("vue").ComputedRef<string>;
    handleCheckboxChange: (event: Event) => boolean;
    lightCheckCssUrl: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    darkCheckHex: {
        type: StringConstructor;
        default: string;
    };
    lightCheckHex: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    palette: string;
    size: string;
    checked: boolean;
    darkCheckHex: string;
    lightCheckHex: string;
}>;
export default _default;
