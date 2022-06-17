// ./tests/components/inputs/VvInput.test.js


import { mount } from '@vue/test-utils'
import { VvInput } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvInput.vue component mounts successfully', async () => {

    expect(VvInput).toBeTruthy()

})



test('VvInput.vue component returns a type email input using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvInput, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvInput.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvInput, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})
