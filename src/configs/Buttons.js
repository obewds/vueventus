export default {
    border: 'border border-transparent',
    cursor: 'cursor-pointer',
    disabled: 'disabled:opacity-25',
    display: 'inline-flex items-center',
    focus: 'focus:outline-none focus:ring focus:ring-opacity-50',
    text: 'font-semibold uppercase tracking-widest',
    base: function () {
        return [
            this.border,
            this.cursor,
            this.disabled,
            this.display,
            this.focus,
            this.text,
        ].join(' ').trim()
    },
    sizes: {
        '4xs': 'px-1 py-px text-xxs',
        '3xs': 'px-1.5 py-0.5 text-xxs',
        '2xs': 'px-2 py-1 text-xs',
        'xs': 'px-2.5 py-1.5 text-xs',
        'sm': 'px-2.5 py-1.5 text-sm',
        'md': 'px-4 py-2 text-sm',
        'lg': 'px-4 py-2 text-base',
        'xl': 'px-6 py-3 text-base',
        '2xl': 'px-7 py-4 text-lg',
        '3xl': 'px-8 py-4 text-xl',
        '4xl': 'px-8 py-5 text-xl',
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
        ].join(' ').trim()
    },
    blockDisplay: 'block w-full flex flex-col items-center justify-center',
    blockBase: function () {
        return [
            this.border,
            this.cursor,
            this.disabled,
            this.blockDisplay,
            this.focus,
            this.text,
        ].join(' ').trim()
    },
    blockSizes: {
        '4xs': 'px-1 py-1 text-2xs',
        '3xs': 'px-2.5 py-1.5 text-2xs',
        '2xs': 'px-2.5 py-1.5 text-xs',
        'xs': 'px-4 py-2 text-sm',
        'sm': 'px-4 py-2 text-base',
        'md': 'px-6 py-3 text-base',
        'lg': 'px-6 py-3 text-lg',
        'xl': 'px-7 py-3.5 text-lg',
        '2xl': 'px-8 py-5 text-xl',
        '3xl': 'px-9 py-5 text-2xl',
        '4xl': 'px-10 py-6 text-2xl',
    },
    getBlockSizeClasses: function (sizesKey) {
        const key = sizesKey && this.blockSizes[sizesKey] ? sizesKey : 'md'
        return this.blockSizes[key]
    },
    blockClasses: function (sizesKey) {
        const sizes = sizesKey ? sizesKey : ''
        return [
            this.blockBase(),
            this.getBlockSizeClasses(sizes),
        ].join(' ').trim()
    },
    fabDisplay: 'inline-flex items-center items-center justify-center',
    fabBase: function () {
        return [
            this.border,
            this.cursor,
            this.disabled,
            this.fabDisplay,
            this.focus,
            this.text,
        ].join(' ').trim()
    },
    fabSizes: {
        '4xs': 'w-6 h-6 text-xxs',
        '3xs': 'w-7 h-7 text-xxs',
        '2xs': 'w-8 h-8 text-xs',
        'xs': 'w-9 h-9 text-xs',
        'sm': 'w-10 h-10 text-sm',
        'md': 'w-11 h-11 text-sm',
        'lg': 'w-12 h-12 text-base',
        'xl': 'w-14 h-14 text-base',
        '2xl': 'w-16 h-16 text-lg',
        '3xl': 'w-20 h-20 text-xl',
        '4xl': 'w-24 h-24 text-xl',
    },
    getFabSizeClasses: function (sizesKey) {
        const key = sizesKey && this.fabSizes[sizesKey] ? sizesKey : 'md'
        return this.fabSizes[key]
    },
    fabClasses: function (sizesKey) {
        const sizes = sizesKey ? sizesKey : ''
        return [
            this.fabBase(),
            this.getFabSizeClasses(sizes),
        ].join(' ').trim()
    },
}
