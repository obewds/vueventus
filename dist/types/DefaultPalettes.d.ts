import type { DefaultColors } from './DefaultColors';
export interface DefaultPalettes {
    default?: DefaultColors;
    [key: string]: DefaultColors | undefined;
}
