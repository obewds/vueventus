import type { DefaultButtonPalettes } from '../types/DefaultButtonPalettes';
import type { DefaultPaletteColors } from '../types/DefaultPaletteColors';
import type { SizesButtons } from '../types/SizesButtons';
export interface VvScrollUpProps {
    buttonClasses: string;
    color: keyof DefaultPaletteColors | string;
    fab: boolean;
    palette: keyof DefaultButtonPalettes | string;
    isVisible: boolean;
    offsetMinimum: number;
    size: keyof SizesButtons | string;
    title: string;
}
