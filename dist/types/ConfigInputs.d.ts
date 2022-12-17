import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { EmptyPalette } from './EmptyPalette';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { SizesInputs } from './SizesInputs';
export interface ConfigInputs {
    border: string;
    display: string;
    outline: string;
    placeholder: string;
    ring: string;
    rounding: string;
    shadow: string;
    text: string;
    transition: string;
    base: BaseFunction;
    sizes: SizesInputs;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultValidationPaletteColors;
        underlined: DefaultValidationPaletteColors;
        [key: string]: EmptyPalette | DefaultValidationPaletteColors;
    };
    [key: string]: any;
}
