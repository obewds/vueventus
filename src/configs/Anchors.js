import Text from './Text.js'

export default {
    cursor: 'cursor-pointer',
    display: '',
    focus: '',
    text: 'underline underline-offset-1',
    base: function () {
        return [
            this.cursor,
            this.display,
            this.focus,
            this.text,
        ].join(' ')
    },
    sizes: {
        '5xs': Text.getSizeClasses('5xs'),
        '4xs': Text.getSizeClasses('4xs'),
        '3xs': Text.getSizeClasses('3xs'),
        '2xs': Text.getSizeClasses('2xs'),
        'xs': Text.getSizeClasses('xs'),
        'sm': Text.getSizeClasses('sm'),
        'md': Text.getSizeClasses('md'),
        'lg': Text.getSizeClasses('lg'),
        'xl': Text.getSizeClasses('xl'),
        '2xl': Text.getSizeClasses('2xl'),
        '3xl': Text.getSizeClasses('3xl'),
        '4xl': Text.getSizeClasses('4xl'),
        '5xl': Text.getSizeClasses('5xl'),
        '6xl': Text.getSizeClasses('6xl'),
        '7xl': Text.getSizeClasses('7xl'),
        '8xl': Text.getSizeClasses('8xl'),
        '9xl': Text.getSizeClasses('9xl'),
        '10xl': Text.getSizeClasses('10xl'),
        '11xl': Text.getSizeClasses('11xl'),
        '12xl': Text.getSizeClasses('12xl'),
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