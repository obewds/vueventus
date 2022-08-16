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
    "VvCheckbox": {
        color: 'default',
        checked: false,
        darkCheckHex: '#242426',
        lightCheckHex: '#e1e1e3',
        palette: 'default',
        size: 'md',
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
        checked: false,
        palette: 'default',
        size: 'md',
        type: 'text',
    },
    "VvListItem": {
        color: 'neutral',
        enableColoredSymbols: true,
        palette: 'default',
        symbolColor: 'primary',
        symbolPalette: 'default',
    },
    "VvRadio": {
        color: 'default',
        checked: false,
        darkRadioHex: '#242426',
        lightRadioHex: '#e1e1e3',
        palette: 'default',
        size: 'md',
    },
    "VvTextarea": {
        color: 'default',
        palette: 'default',
        size: 'md',
        rowSize: 'md',
    },
}
