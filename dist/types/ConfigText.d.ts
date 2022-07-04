import { BaseFunction } from './BaseFunction';
import { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import { EmptyPalette } from './EmptyPalette';
import { ReturnsClassesFunction } from './ReturnsClassesFunction';
import { TextSizes } from './TextSizes';
export interface ConfigText {
    align: string | undefined;
    decoration: string | undefined;
    family: string | undefined;
    lineHeight: string | undefined;
    smoothing: string | undefined;
    spacing: string | undefined;
    weight: string | undefined;
    wordBreak: string | undefined;
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
