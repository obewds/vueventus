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



test('VvInput.vue component emits the update:modelValue value as expected', async () => {

    const wrapper = mount(VvInput)

    const input = wrapper.find('input')
  
    await input.setValue('test')

    const updateModelValue = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue).toHaveLength(1)
    expect(updateModelValue[0]).toEqual(['test'])
    
})



test('VvInput.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvInput, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-input-')
    
})
