import type { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors';
import type { DefaultValidationPalette } from '../types/DefaultValidationPalette';
import type { VvListboxData } from '../types/VvListboxData';
export interface VvListboxProps {
    data: VvListboxData[];
    displayClasses: string;
    displayDisabledClasses: string;
    iconDisabledClasses: string;
    iconSelectedClasses: string;
    iconsSizeClasses: string;
    label: string;
    labelClasses: string;
    listboxButtonClasses: string;
    listboxButtonColor: DefaultValidationPaletteColors | string;
    listboxButtonPalette: DefaultValidationPalette | string;
    listboxOptionClasses: string;
    listboxOptionColor: DefaultValidationPaletteColors | string;
    listboxOptionPalette: DefaultValidationPalette | string;
    listboxOptionsClasses: string;
    listboxOptionsWithLabelSpacing: string;
    listboxOptionsWithoutLabelSpacing: string;
    optionIconParentClasses: string;
    selectedDisplayClasses: string;
    selectedIndex: number;
    size: string;
}
