// ./src/types/ConfigColorMode.ts

export interface ConfigColorMode {
    dark: {
        bg: string,
        ground: string,
        hex: string,
        text: string,
        title: string,
        [key: string]: any
    },
    light: {
        bg: string,
        ground: string,
        hex: string,
        text: string,
        title: string,
        [key: string]: any
    }
}
