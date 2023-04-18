
// ./tests/components/anchors/VvAnchor.test.js


import { mount } from '@vue/test-utils'
import { VvAnchor } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvAnchor.vue component imports successfully', async () => {

    expect(VvAnchor).toBeTruthy()

})



test('VvAnchor.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvAnchor, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvAnchor.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvAnchor, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('</a>')
    
})



test('VvAnchor.vue component "button" prop returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: true,
        },
    })

    expect(wrapper.html()).toContain('items-center')
    
})



test('VvAnchor.vue component returns Tailwind CSS classes for a full width element', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: true,
            buttonBlock: true,
        },
    })

    expect(wrapper.html()).toContain('w-full')
    
})



test('VvAnchor.vue component returns Tailwind CSS classes for a fab button set of classes', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: true,
            buttonFab: true,
        },
    })

    expect(wrapper.html()).toContain('cursor-pointer')
    
})



test('VvAnchor.vue component button mode color prop returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: true,
            palette: 'solid',
            color: 'success',
        },
    })

    expect(wrapper.html()).toContain('green')
    
})



test('VvAnchor.vue component external mode returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            external: true,
        },
    })

    expect(wrapper.html()).toContain('target="_blank"')
    expect(wrapper.html()).toContain('rel="noopener noreferrer"')
    
})



test('VvAnchor.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-anchor-')
    
})



test('VvAnchor.vue component debug mode with external mode returns an expected result', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            external: true,
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-anchor')
    
})
