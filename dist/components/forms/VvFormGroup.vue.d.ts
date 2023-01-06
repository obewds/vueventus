import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
import type { SizesText } from '../../types/SizesText';
declare const _default: import("vue").DefineComponent<{
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayError: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayHelp: {
        type: BooleanConstructor;
        default: boolean;
    };
    displaySuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorClasses: {
        type: StringConstructor;
        default: string;
    };
    errorText: {
        type: StringConstructor;
        default: string;
    };
    errorTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    errorTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    errorTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    helpClasses: {
        type: StringConstructor;
        default: string;
    };
    helpText: {
        type: StringConstructor;
        default: string;
    };
    helpTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    helpTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    helpTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    labelFor: {
        type: StringConstructor;
        required: true;
    };
    labelClasses: {
        type: StringConstructor;
        default: string;
    };
    labelTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    labelTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    labelTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    slotParentClasses: {
        type: StringConstructor;
        default: string;
    };
    successClasses: {
        type: StringConstructor;
        default: string;
    };
    successText: {
        type: StringConstructor;
        default: string;
    };
    successTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    successTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    successTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    wrapperClasses: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    debug: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayError: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayHelp: {
        type: BooleanConstructor;
        default: boolean;
    };
    displaySuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorClasses: {
        type: StringConstructor;
        default: string;
    };
    errorText: {
        type: StringConstructor;
        default: string;
    };
    errorTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    errorTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    errorTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    helpClasses: {
        type: StringConstructor;
        default: string;
    };
    helpText: {
        type: StringConstructor;
        default: string;
    };
    helpTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    helpTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    helpTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    labelFor: {
        type: StringConstructor;
        required: true;
    };
    labelClasses: {
        type: StringConstructor;
        default: string;
    };
    labelTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    labelTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    labelTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    slotParentClasses: {
        type: StringConstructor;
        default: string;
    };
    successClasses: {
        type: StringConstructor;
        default: string;
    };
    successText: {
        type: StringConstructor;
        default: string;
    };
    successTextColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    successTextPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    successTextSize: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    wrapperClasses: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    debug: boolean;
    displayError: boolean;
    displayHelp: boolean;
    displaySuccess: boolean;
    errorClasses: string;
    errorText: string;
    errorTextColor: keyof DefaultPaletteColors;
    errorTextPalette: keyof DefaultPalettes;
    errorTextSize: keyof SizesText;
    helpClasses: string;
    helpText: string;
    helpTextColor: keyof DefaultPaletteColors;
    helpTextPalette: keyof DefaultPalettes;
    helpTextSize: keyof SizesText;
    labelClasses: string;
    labelTextColor: keyof DefaultPaletteColors;
    labelTextPalette: keyof DefaultPalettes;
    labelTextSize: keyof SizesText;
    slotParentClasses: string;
    successClasses: string;
    successText: string;
    successTextColor: keyof DefaultPaletteColors;
    successTextPalette: keyof DefaultPalettes;
    successTextSize: keyof SizesText;
    wrapperClasses: string;
}>;
export default _default;
