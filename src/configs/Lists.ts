// ./src/configs/Text.ts

import Text from './Text.js'
import type { ConfigLists } from '../types/ConfigLists'

export default <ConfigLists>{
    align: 'text-left',
    decoration: '',
    family: '',
    lineHeight: '',
    padding: 'pl-4',
    smoothing: 'subpixel-antialiased',
    spacing: '',
    weight: '',
    wordBreak: '',
    base: function () {
        return [
            this.align,
            this.decoration,
            this.family,
            this.lineHeight,
            this.padding,
            this.smoothing,
            this.spacing,
            this.weight,
            this.wordBreak,
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