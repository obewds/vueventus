import ValidButtonTypes from '../../validators/ValidButtonTypes';
declare const _default: import("vue").DefineComponent<{
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}, {
    btnType: "button" | "submit" | "reset";
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}>>, {
    color: string;
    palette: string;
    type: string;
    block: boolean;
    fab: boolean;
    size: string;
}>;
export default _default;
