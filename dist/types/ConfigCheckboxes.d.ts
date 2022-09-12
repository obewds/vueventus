import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPalette } from './DefaultValidationPalette';
import type { EmptyPalette } from './EmptyPalette';
import type { InputsSizes } from './InputsSizes';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
export interface ConfigCheckboxes {
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
        default: DefaultValidationPalette;
        [key: string]: EmptyPalette | DefaultValidationPalette;
    };
    [key: string]: any;
}
