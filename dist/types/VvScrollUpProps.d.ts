import type { DefaultButtonPalettes } from '../types/DefaultButtonPalettes';
import type { DefaultPaletteColors } from '../types/DefaultPaletteColors';
import type { SizesButtons } from '../types/SizesButtons';
export interface VvScrollUpProps {
    buttonClasses: string;
    color: keyof DefaultPaletteColors | string;
    debug: boolean;
    fab: boolean;
    isVisible: boolean;
    offsetMinimum: number;
    palette: keyof DefaultButtonPalettes | string;
    size: keyof SizesButtons | string;
    title: string;
}
