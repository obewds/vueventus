import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    enableColoredSymbols: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    symbolColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    symbolPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    symbolClasses: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    enableColoredSymbols: {
        type: BooleanConstructor;
        default: boolean;
    };
    palette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    symbolColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    symbolPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
}>>, {
    color: keyof DefaultPaletteColors;
    palette: keyof DefaultPalettes;
    enableColoredSymbols: boolean;
    symbolColor: keyof DefaultPaletteColors;
    symbolPalette: keyof DefaultPalettes;
}>;
export default _default;
