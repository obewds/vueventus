// ./src/configs/Radios.ts

import type { ConfigRadios } from '../types/ConfigRadios'
import Transitions from './Transitions.js'

export default <ConfigRadios>{
    border: 'border-gray-400 dark:border-black',
    outline: '',
    ring: 'focus:ring-offset-2 focus:ring-2 ring-offset-white dark:ring-offset-gray-800',
    rounding: '',
    shadow: '',
    text: '',
    transition: Transitions.classes('colors', 'inOut', '300'),
    base: function () {
        return [
            this.border,
            this.outline,
            this.ring,
            this.rounding,
            this.shadow,
            this.text,
            this.transition,
        ].join(' ').replace(/\s+/g,' ').trim()
    },
    sizes: {
        'xs': 'h-3 w-3',
        'sm': 'h-4 w-4',
        'md': 'h-5 w-5',
        'lg': 'h-6 w-6',
        'xl': 'h-7 w-7',
        '2xl': 'h-8 w-8',
    },
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
