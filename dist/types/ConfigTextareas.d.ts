import { BaseFunction } from './BaseFunction';
import { DefaultValidationPalette } from './DefaultValidationPalette';
import { EmptyPalette } from './EmptyPalette';
import { TextareasSizes } from './TextareasSizes';
import { TextareasRowSizes } from './TextareasRowSizes';
import { ReturnsClassesFunction } from './ReturnsClassesFunction';
import { ReturnsNumberFunction } from './ReturnsNumberFunction';
export interface ConfigTextareas {
    border: string | undefined;
    display: string | undefined;
    outline: string | undefined;
    placeholder: string | undefined;
    ring: string | undefined;
    rounding: string | undefined;
    shadow: string | undefined;
    text: string | undefined;
    transition: string | undefined;
    base: BaseFunction;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        validation: DefaultValidationPalette;
        [key: string]: EmptyPalette | undefined;
    };
    sizes: TextareasSizes;
    rowSizes: TextareasRowSizes;
    getRowSize: ReturnsNumberFunction;
    [key: string]: any;
}
