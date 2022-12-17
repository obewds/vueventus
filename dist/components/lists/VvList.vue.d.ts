import ValidListTypes from '../../validators/ValidListTypes';
import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
import type { TextSizes } from '../../types/TextSizes';
declare const _default: import("vue").DefineComponent<{
    listStyleTypeClass: {
        type: StringConstructor;
        default: string;
    };
    markerColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    markerPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    size: {
        type: PropType<keyof TextSizes>;
        default: keyof import("../..").SizesText;
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
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    markerPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    size: {
        type: PropType<keyof TextSizes>;
        default: keyof import("../..").SizesText;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: "ol" | "ul";
        validator: (prop: ValidListTypes) => boolean;
    };
}>>, {
    size: keyof TextSizes;
    tag: "ol" | "ul";
    listStyleTypeClass: string;
    markerColor: keyof DefaultPaletteColors;
    markerPalette: keyof DefaultPalettes;
}>;
export default _default;
