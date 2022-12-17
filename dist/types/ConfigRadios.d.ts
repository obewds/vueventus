import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { EmptyPalette } from './EmptyPalette';
import type { InputsSizes } from './InputsSizes';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
export interface ConfigRadios {
    baseColors: string;
    border: string;
    outline: string;
    ring: string;
    rounding: string;
    shadow: string;
    transition: string;
    base: BaseFunction;
    sizes: InputsSizes;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultValidationPaletteColors;
        [key: string]: EmptyPalette | DefaultValidationPaletteColors;
    };
    [key: string]: any;
}
