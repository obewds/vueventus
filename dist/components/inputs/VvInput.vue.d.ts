import ValidInputTypes from '../../validators/ValidInputTypes';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string | import("../../types/ValidationInputPaletteColors").ValidationInputPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: "number" | "search" | "time" | "text" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string | import("../../types/ValidationInputPaletteColors").ValidationInputPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: "number" | "search" | "time" | "text" | "color" | "date" | "datetime-local" | "email" | "month" | "password" | "tel" | "url";
        validator: (prop: ValidInputTypes) => boolean;
    };
}>>, {
    color: string;
    palette: string;
    type: string;
    size: string;
}>;
export default _default;
