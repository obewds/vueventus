import Anchors from './Anchors.js'
import Buttons from './Buttons.js'
import Transitions from './Transitions.js'

import AnchorDefault from './palettes/AnchorDefault.js'
import BorderDefault from './palettes/BorderDefault.js'
import ButtonOutline from './palettes/ButtonOutline.js'
import ButtonSolid from './palettes/ButtonSolid.js'
import GroundConsole from './palettes/GroundConsole.js'
import GroundDefault from './palettes/GroundDefault.js'
import GroundMonochromatic from './palettes/GroundMonochromatic.js'
import GroundPastel from './palettes/GroundPastel.js'
import TextDefault from './palettes/TextDefault.js'

export default {
    //
    // Design System Defaults
    //
    anchors: {
        ...Anchors,
        palettes: {
            default: AnchorDefault,
        },
    },
    borders: {
        palettes: {
            default: BorderDefault,
        },
    },
    buttons: {
        ...Buttons,
        palettes: {
            outline: ButtonOutline,
            solid: ButtonSolid,
        },
    },
    colorMode: {
        dark: {
            bg: 'bg-gray-900',
            ground: 'bg-gray-900',
            hex: '#242426',
            text: 'text-gray-100',
            title: 'Enable Dark Mode',
        },
        light: {
            bg: 'bg-gray-100',
            ground: 'bg-gray-100',
            hex: '#e1e1e3',
            text: 'text-gray-900',
            title: 'Enable Light Mode',
        },
    },
    grounds: {
        palettes: {
            console: GroundConsole,
            default: GroundDefault,
            monochromatic: GroundMonochromatic,
            pastel: GroundPastel,
        },
    },
    text: {
        palettes: {
            default: TextDefault,
        },
    },
    transitions: {
        ...Transitions,
    },
    //
    // Component Prop Defaults
    //
    defaults: {
        "VvAnchor": {
            button: false,
            buttonBlock: false,
            buttonFab: false,
            buttonSize: 'md',
            color: 'default',
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
    },
}
