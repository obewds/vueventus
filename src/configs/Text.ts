// ./src/configs/Text.ts

import { ConfigText } from '../types/ConfigText'

export default <ConfigText>{
    align: '',
    decoration: '',
    family: '',
    lineHeight: '',
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
            this.smoothing,
            this.spacing,
            this.weight,
            this.wordBreak,
        ].join(' ').replace(/\s+/g,' ').trim()
    },
    sizes: {
        '5xs': 'text-5xs',
        '4xs': 'text-4xs',
        '3xs': 'text-3xs',
        '2xs': 'text-2xs',
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-base',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
        '10xl': 'text-10xl',
        '11xl': 'text-11xl',
        '12xl': 'text-12xl',
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