import ValidButtonTypes from '../../validators/ValidButtonTypes';
import type { PropType } from 'vue';
import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { SizesButtons } from '../../types/SizesButtons';
declare const _default: import("vue").DefineComponent<{
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}>>, {
    fab: boolean;
    color: keyof DefaultPaletteColors;
    debug: boolean;
    palette: keyof DefaultButtonPalettes;
    type: "button" | "submit" | "reset";
    block: boolean;
    size: keyof SizesButtons;
}, {}>;
export default _default;
