// ./tests/components/inputs/VvRadio.test.js


import { mount } from '@vue/test-utils'
import { VvRadio } from '../../../src/index'
import VvRadioPage from '../../../src/views/components/inputs/VvRadioPage.vue'
import { VvConfig } from '../../../src/index'



test('VvRadio.vue component mounts successfully', async () => {

    expect(VvRadio).toBeTruthy()

})



test('VvRadio.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvRadio, {
        props: {
            value: 'test',
        },
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})



test('VvRadio.vue component emits the update:modelValue value as expected', async () => {

    const wrapper = mount(VvRadio, {
        props: {
            value: 'test',
        },
    })

    const input = wrapper.find('input')

    await input.setValue() // setValue default state is checked="true"

    const updateModelValue = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue).toHaveLength(1)
    expect(updateModelValue[0]).toEqual([true])
    
})
