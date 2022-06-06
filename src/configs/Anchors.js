import Text from './Text.js'

export default {
    cursor: 'cursor-pointer',
    display: '',
    focus: '',
    text: 'underline underline-offset-2',
    base: function () {
        return [
            this.cursor,
            this.display,
            this.focus,
            this.text,
        ].join(' ')
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
        ].join(' ')
    },
}