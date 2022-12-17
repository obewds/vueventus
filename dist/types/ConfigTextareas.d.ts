import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { EmptyPalette } from './EmptyPalette';
import type { TextareasSizes } from './TextareasSizes';
import type { TextareasRowSizes } from './TextareasRowSizes';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { ReturnsNumberFunction } from './ReturnsNumberFunction';
export interface ConfigTextareas {
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
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultValidationPaletteColors;
        underlined: DefaultValidationPaletteColors;
        [key: string]: EmptyPalette | DefaultValidationPaletteColors;
    };
    sizes: TextareasSizes;
    rowSizes: TextareasRowSizes;
    getRowSize: ReturnsNumberFunction;
    [key: string]: any;
}
