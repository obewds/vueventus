import { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import { BaseFunction } from './BaseFunction';
import { EmptyPalette } from './EmptyPalette';
import { ReturnsClassesFunction } from './ReturnsClassesFunction';
import { TextSizes } from './TextSizes';
export interface ConfigAnchors {
    cursor: string | undefined;
    display: string | undefined;
    focus: string | undefined;
    text: string | undefined;
    transition: string | undefined;
    base: BaseFunction;
    sizes: TextSizes;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultConfigPalette;
        [key: string]: EmptyPalette | DefaultConfigPalette;
    };
    [key: string]: any;
}
