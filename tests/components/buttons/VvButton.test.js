
// ./tests/components/buttons/VvButton.test.js


import { mount } from '@vue/test-utils'
import { VvButton } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvButton.vue component imports successfully', async () => {

    expect(VvButton).toBeTruthy()

})



test('VvButton.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvButton, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvButton.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvButton, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('button')
    
})



test('VvButton.vue component returns Tailwind CSS classes for a full width element', async () => {

    const wrapper = mount(VvButton, {
        props: {
            block: true,
        },
    })

    expect(wrapper.html()).toContain('w-full')
    
})



test('VvButton.vue component returns Tailwind CSS classes for a specific width and height sized element', async () => {

    const wrapper = mount(VvButton, {
        props: {
            fab: true,
        },
    })

    expect(wrapper.html()).toContain('w-')
    expect(wrapper.html()).toContain('h-')
    
})



test('VvButton.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvButton, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-button-')
    
})
