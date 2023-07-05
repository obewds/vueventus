import ValidButtonTypes from '../../validators/ValidButtonTypes';
import ValidColorModes from '../../validators/ValidColorModes';
import type { PropType } from 'vue';
import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { SizesButtons } from '../../types/SizesButtons';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    groundDark: {
        type: StringConstructor;
        default: string;
    };
    groundDarkHex: {
        type: StringConstructor;
        default: string;
    };
    groundLight: {
        type: StringConstructor;
        default: string;
    };
    groundLightHex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: PropType<"dark" | "light">;
        default: "dark" | "light";
        validator: (prop: ValidColorModes) => boolean;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    textDark: {
        type: StringConstructor;
        default: string;
    };
    textLight: {
        type: StringConstructor;
        default: string;
    };
    titleDark: {
        type: StringConstructor;
        default: string;
    };
    titleLight: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}, {
    mode: import("vue").Ref<"dark" | "light">;
    icon: import("vue").ComputedRef<"sun" | "moon">;
    title: import("vue").ComputedRef<string>;
}, unknown, {}, {
    toggleColorMode(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    groundDark: {
        type: StringConstructor;
        default: string;
    };
    groundDarkHex: {
        type: StringConstructor;
        default: string;
    };
    groundLight: {
        type: StringConstructor;
        default: string;
    };
    groundLightHex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: PropType<"dark" | "light">;
        default: "dark" | "light";
        validator: (prop: ValidColorModes) => boolean;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    textDark: {
        type: StringConstructor;
        default: string;
    };
    textLight: {
        type: StringConstructor;
        default: string;
    };
    titleDark: {
        type: StringConstructor;
        default: string;
    };
    titleLight: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: "button" | "submit" | "reset";
        validator: (prop: ValidButtonTypes) => boolean;
    };
}>>, {
    color: keyof DefaultPaletteColors;
    debug: boolean;
    palette: keyof DefaultButtonPalettes;
    type: "button" | "submit" | "reset";
    size: keyof SizesButtons;
    groundDark: string;
    groundDarkHex: string;
    groundLight: string;
    groundLightHex: string;
    mode: "dark" | "light";
    textDark: string;
    textLight: string;
    titleDark: string;
    titleLight: string;
}, {}>;
export default _default;
