import ValidButtonTypes from '../../validators/ValidButtonTypes';
import ValidColorModes from '../../validators/ValidColorModes';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"dark" | "light">;
        default: string;
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
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
        default: string;
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../..").DefaultPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string | import("../..").DefaultPalettes;
    };
    size: {
        type: StringConstructor;
        default: string;
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
    color: string;
    palette: string;
    type: "button" | "submit" | "reset";
    size: string;
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
