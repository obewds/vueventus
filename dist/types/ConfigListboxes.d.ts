import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { SizesSelects } from './SizesSelects';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
export interface ConfigListboxes {
    border: string;
    display: string;
    outline: string;
    ring: string;
    rounding: string;
    shadow: string;
    text: string;
    transition: string;
    base: BaseFunction;
    sizes: SizesSelects;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    buttonPalettes: {
        default: DefaultValidationPaletteColors;
        underlined: DefaultValidationPaletteColors;
        [key: string]: DefaultValidationPaletteColors;
    };
    optionPalettes: {
        default: DefaultValidationPaletteColors;
        underlined: DefaultValidationPaletteColors;
        [key: string]: DefaultValidationPaletteColors;
    };
    [key: string]: any;
}
