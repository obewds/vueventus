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



test('VvTextarea.vue component emits the update:modelValue value as expected', async () => {

    const wrapper = mount(VvTextarea)

    const textarea = wrapper.find('textarea')
  
    await textarea.setValue('test')

    const updateModelValue = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue).toHaveLength(1)
    expect(updateModelValue[0]).toEqual(['test'])
    
})



test('VvTextarea.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvTextarea, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-textarea-')
    
})
