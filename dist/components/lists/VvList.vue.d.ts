import ValidListTypes from '../../validators/ValidListTypes';
import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
import type { SizesText } from '../../types/SizesText';
declare const _default: import("vue").DefineComponent<{
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: "ol" | "ul";
        validator: (prop: ValidListTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
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
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: "ol" | "ul";
        validator: (prop: ValidListTypes) => boolean;
    };
}>>, {
    debug: boolean;
    size: keyof SizesText;
    tag: "ol" | "ul";
    listStyleTypeClass: string;
    markerColor: keyof DefaultPaletteColors;
    markerPalette: keyof DefaultPalettes;
}>;
export default _default;
