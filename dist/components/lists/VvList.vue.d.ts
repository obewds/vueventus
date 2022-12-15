import ValidListTypes from '../../validators/ValidListTypes';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    listStyleTypeClass: {
        type: StringConstructor;
        default: string;
    };
    markerColor: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    markerPalette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: "ol" | "ul";
        validator: (prop: ValidListTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    listStyleTypeClass: {
        type: StringConstructor;
        default: string;
    };
    markerColor: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    markerPalette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: "ol" | "ul";
        validator: (prop: ValidListTypes) => boolean;
    };
}>>, {
    size: string;
    tag: "ol" | "ul";
    listStyleTypeClass: string;
    markerColor: string;
    markerPalette: string;
}>;
export default _default;
