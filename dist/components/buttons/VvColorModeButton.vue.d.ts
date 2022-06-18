import ValidColorModes from '../../validators/ValidColorModes';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../../types/DefaultPaletteColors").DefaultPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string;
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
}, {
    mode: import("vue").Ref<string>;
    icon: import("vue").ComputedRef<"sun" | "moon">;
    title: import("vue").ComputedRef<string>;
}, unknown, {}, {
    toggleColorMode(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
        validator: (prop: ValidColorModes) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string | import("../../types/DefaultPaletteColors").DefaultPaletteColors;
    };
    palette: {
        type: StringConstructor;
        default: string;
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
}>>, {
    color: string;
    palette: string;
    size: string;
    mode: string;
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
