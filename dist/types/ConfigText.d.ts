import { BaseFunction } from './BaseFunction';
import { DefaultPaletteColors } from '../types/DefaultPaletteColors';
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
        default: DefaultPaletteColors;
    };
    [key: string]: any;
}
