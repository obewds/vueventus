// ./src/types/DefaultConfigPalette.ts

export interface DefaultConfigPalette {
    default?: string
    error?: string | undefined
    primary?: string | undefined
    secondary?: string | undefined
    success?: string | undefined
    [key: string]: string | undefined
}
