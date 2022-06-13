export default {
    display: 'block w-full',
    ring: 'ring-opacity-50',
    text: 'text-sm',
    base: function () {
        return [
            this.display,
            this.ring,
            this.text,
        ].join(' ').trim()
    },
}
