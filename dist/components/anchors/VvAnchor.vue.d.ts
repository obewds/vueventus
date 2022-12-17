import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
import type { SizesButtons } from '../../types/SizesButtons';
import type { TextSizes } from '../../types/TextSizes';
declare const _default: import("vue").DefineComponent<{
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonBlock: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonFab: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonSize: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    external: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<string | number>;
        default: keyof DefaultPalettes;
    };
    textSize: {
        type: PropType<keyof TextSizes>;
        default: keyof import("../../index.js").SizesText;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonBlock: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonFab: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonSize: {
        type: PropType<keyof SizesButtons>;
        default: keyof SizesButtons;
    };
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    external: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: PropType<string | number>;
        default: keyof DefaultPalettes;
    };
    textSize: {
        type: PropType<keyof TextSizes>;
        default: keyof import("../../index.js").SizesText;
    };
}>>, {
    button: boolean;
    color: keyof DefaultPaletteColors;
    buttonBlock: boolean;
    buttonFab: boolean;
    buttonSize: keyof SizesButtons;
    external: boolean;
    href: string;
    palette: string | number;
    textSize: keyof TextSizes;
}>;
export default _default;
