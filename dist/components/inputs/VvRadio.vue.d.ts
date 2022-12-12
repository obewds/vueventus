declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
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
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
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
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
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
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    palette: string;
    size: string;
    checked: boolean;
    darkRadioHex: string;
    lightRadioHex: string;
}>;
export default _default;
