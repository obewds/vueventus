
// ./tests/components/elements/VvEl.test.js


import { mount } from '@vue/test-utils'
import { VvEl } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvEl.vue component mounts successfully', async () => {

    expect(VvEl).toBeTruthy()

})



test('VvEl.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvEl, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvEl.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvEl, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('div')
    
})



test('VvEl.vue component can intake props and render an expected output', async () => {

    const wrapper = mount(VvEl, {
        props: {
            borderColor: 'primary',
            groundColor: 'primary',
            textColor: 'primary',
        },
    })

    expect(wrapper.html()).toContain('border-')
    expect(wrapper.html()).toContain('bg-')
    expect(wrapper.html()).toContain('text-')
    
})
