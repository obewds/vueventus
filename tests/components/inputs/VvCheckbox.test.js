// ./tests/components/inputs/VvCheckbox.test.js


import { mount } from '@vue/test-utils'
import { VvCheckbox } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvCheckbox.vue component mounts successfully', async () => {

    expect(VvCheckbox).toBeTruthy()

})



test('VvCheckbox.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvCheckbox, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})



test('VvCheckbox.vue component emits the update:modelValue value as expected', async () => {

    const wrapper = mount(VvCheckbox)

    const input = wrapper.find('input')

    await input.setValue() // setValue default state is checked="true"

    const updateModelValue = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue).toHaveLength(1)
    expect(updateModelValue[0]).toEqual([true])

    await input.setValue(false) // setValue state is checked="false"

    const updateModelValue2 = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue2).toHaveLength(2)
    expect(updateModelValue2[1]).toEqual([false])
    
})


test('VvCheckbox.vue component can successfully ingest and output the expected data-test attribute value containing the passed in hex values props', async () => {
    
    const wrapper = mount(VvCheckbox, {
        props: {
            lightCheckHex: '#ffffff',
            darkCheckHex: '#000000',
        },
    })

    expect(wrapper.html()).toContain('ffffff')
    expect(wrapper.html()).toContain('000000')
    
})
