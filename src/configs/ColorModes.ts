// ./src/configs/ColorModes.ts

import type { ConfigColorMode } from '../types/ConfigColorMode'

export default <ConfigColorMode>{
    dark: {
        ground: 'bg-gray-900',
        hex: '#242426',
        text: 'text-gray-100',
        title: 'Enable Dark Mode',
    },
    light: {
        ground: 'bg-gray-100',
        hex: '#e1e1e3',
        text: 'text-gray-900',
        title: 'Enable Light Mode',
    },
}
