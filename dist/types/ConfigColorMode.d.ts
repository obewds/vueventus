import { ColorMode } from './ColorMode';
export interface ConfigColorMode {
    dark: ColorMode;
    light: ColorMode;
    [key: string]: ColorMode;
}
