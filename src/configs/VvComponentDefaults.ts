// ./src/configs/VvComponentDefaults.ts

import type { ConfigDefaults } from '../types/ConfigDefaults'

export default <ConfigDefaults>{
    "VvAnchor": {
        button: false,
        buttonBlock: false,
        buttonFab: false,
        buttonSize: 'md',
        color: 'default',
        external: false,
        href: '#',
        palette: 'default',
    },
    "VvButton": {
        block: false,
        color: 'primary',
        fab: false,
        palette: 'solid',
        size: 'md',
        type: 'button',
    },
    "VvColorModeButton": {
        color: 'default',
        mode: 'light',
        palette: 'outline',
        size: 'xs',
        type: 'button',
    },
    "VvEl": {
        borderPalette: 'default',
        borderColor: '',
        groundPalette: 'default',
        groundColor: 'default',
        tag: 'div',
        textPalette: 'default',
        textColor: 'default',
    },
    "VvInput": {
        color: 'default',
        palette: 'default',
        size: 'md',
        type: 'text',
    },
    "VvListItem": {
        color: 'default',
        enableColoredSymbols: true,
        palette: 'default',
        symbolColor: 'primary',
        symbolPalette: 'default',
    },
    "VvTextarea": {
        color: 'default',
        palette: 'default',
        size: 'md',
        rowSize: 'md',
    },
}
