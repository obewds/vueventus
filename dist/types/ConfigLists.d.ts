import type { BaseFunction } from './BaseFunction';
import type { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import type { EmptyPalette } from './EmptyPalette';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { TextSizes } from './TextSizes';
export interface ConfigLists {
    align: string;
    decoration: string;
    family: string;
    lineHeight: string;
    padding: string;
    smoothing: string;
    spacing: string;
    weight: string;
    wordBreak: string;
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
