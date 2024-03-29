import type { DefaultPaletteColors } from '../types/DefaultPaletteColors';
import type { BaseFunction } from './BaseFunction';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { SizesText } from './SizesText';
export interface ConfigAnchors {
    cursor: string;
    display: string;
    focus: string;
    text: string;
    transition: string;
    base: BaseFunction;
    sizes: SizesText;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultPaletteColors;
        [key: string]: DefaultPaletteColors;
    };
    [key: string]: any;
}
