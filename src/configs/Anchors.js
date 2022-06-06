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
    sizes: Text.sizes,
    getSizeClasses: Text.getSizeClasses(sizesKey),
    classes: function (sizesKey) {
        const sizes = sizesKey ? sizesKey : ''
        return [
            this.base(),
            this.getSizeClasses(sizes),
        ].join(' ')
    },
}