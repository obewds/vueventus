import type { GroundTextColors } from './GroundTextColors';
export interface AppColorPairs {
    [key: string | number]: GroundTextColors | AppColorPairs | string;
}
