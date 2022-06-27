declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    enableColoredSymbols: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    symbolColor: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    symbolPalette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    symbolClasses: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    enableColoredSymbols: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
    symbolColor: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPaletteColors;
    };
    symbolPalette: {
        type: StringConstructor;
        default: string | import("../../index.js").DefaultPalettes;
    };
}>>, {
    color: string;
    palette: string;
    enableColoredSymbols: boolean;
    symbolColor: string;
    symbolPalette: string;
}>;
export default _default;
