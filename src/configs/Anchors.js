export default {
    cursor: 'cursor-pointer',
    disabled: 'disabled:opacity-25',
    display: '',
    focus: '',
    text: 'underline',
    base: function () {
        return [
            this.cursor,
            this.disabled,
            this.display,
            this.focus,
            this.text,
        ].join(' ')
    },
}