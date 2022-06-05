
// ./tests/components/anchors/VvAnchor.test.js


import { mount } from '@vue/test-utils'
import { VvAnchor } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvAnchor.vue component mounts successfully', async () => {

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
