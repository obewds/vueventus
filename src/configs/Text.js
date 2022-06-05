export default {
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
        ].join(' ')
    },
    sizes: {
        '4xs': 'text-4xs leading-3',
        '3xs': 'text-3xs leading-4',
        '2xs': 'text-2xs leading-5',
        'xs': 'text-xs leading-6',
        'sm': 'text-sm leading-7',
        'md': 'text-base leading-8',
        'lg': 'text-lg leading-9',
        'xl': 'text-xl leading-10',
        '2xl': 'text-2xl leading-10',
        '3xl': 'text-3xl leading-10',
        '4xl': 'text-4xl leading-10',
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
        ].join(' ')
    },
}