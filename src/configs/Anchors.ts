// ./src/configs/Anchors.ts

import { ConfigAnchors } from '../types/ConfigAnchors'
import Text from './Text.js'
import Transitions from './Transitions.js'

export default <ConfigAnchors>{
    cursor: 'cursor-pointer',
    display: '',
    focus: '',
    text: 'underline underline-offset-2',
    transition: Transitions.classes('colors', 'inOut', '300'),
    base: function () {
        return [
            this.cursor,
            this.display,
            this.focus,
            this.text,
            this.transition,
        ].join(' ').replace(/\s+/g,' ').trim()
    },
    sizes: Text.sizes,
    getSizeClasses: function (sizesKey) {
        const key = sizesKey && this.sizes[sizesKey] ? sizesKey : 'md'
        return this.sizes[key]
    },
    classes: function (sizesKey) {
        const sizes = sizesKey ? sizesKey : ''
        return [
            this.base(),
            this.getSizeClasses(sizes),
        ].join(' ').replace(/\s+/g,' ').trim()
    },
}