// ./tests/components/textareas/VvTextarea.test.js


import { mount } from '@vue/test-utils'
import { VvTextarea } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvTextarea.vue component mounts successfully', async () => {

    expect(VvTextarea).toBeTruthy()

})



test('VvTextarea.vue component returns a type email textarea using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvTextarea, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvTextarea.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvTextarea, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('textarea')
    
})
