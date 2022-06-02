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
    anchors: {
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
            text: 'text-gray-100',
        },
        light: {
            bg: 'bg-gray-100',
            text: 'text-gray-900',
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
}
