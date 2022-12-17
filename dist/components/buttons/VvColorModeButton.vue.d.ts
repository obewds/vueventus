import ValidButtonTypes from '../../validators/ValidButtonTypes';
import ValidColorModes from '../../validators/ValidColorModes';
import type { PropType } from 'vue';
import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { SizesButtons } from '../../types/SizesButtons';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"dark" | "light">;
        default: "dark" | "light";
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
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
    toggleColorMode(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"dark" | "light">;
        default: "dark" | "light";
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    palette: {
        type: PropType<keyof DefaultButtonPalettes>;
        default: keyof import("../..").DefaultPalettes;
    };
    size: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
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
    palette: keyof DefaultButtonPalettes;
    type: "button" | "submit" | "reset";
    size: keyof SizesButtons;
    mode: "dark" | "light";
    groundDark: string;
    groundDarkHex: string;
    groundLight: string;
    groundLightHex: string;
    textDark: string;
    textLight: string;
    titleDark: string;
    titleLight: string;
}>;
export default _default;
