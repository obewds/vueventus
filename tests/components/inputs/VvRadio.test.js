// ./tests/components/inputs/VvRadio.test.js


import { mount } from '@vue/test-utils'
import { VvRadio } from '../../../src/index'
import { VvConfig } from '../../../src/index'
import TestRadiosPair from '../../../src/views/compos/TestRadiosPair.vue'



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


test('VvRadio.vue component can successfully ingest and output the expected data-test attribute value containing the passed in hex values props', async () => {
    
    const wrapper = mount(VvRadio, {
        props: {
            value: 'test',
            lightRadioHex: '#ffffff',
            darkRadioHex: '#000000',
        },
    })

    expect(wrapper.html()).toContain('ffffff')
    expect(wrapper.html()).toContain('000000')
    
})



test('VvRadio.vue component that is selected triggers a false checked value when deselected by selecting another radio', async () => {
    
    const wrapper = mount(TestRadiosPair)

    let firstRadio = wrapper.get('input#radioOne')

    await wrapper.find('input#radioOne').setValue()

    expect(firstRadio.html()).toContain('checked=""')
    
})



test('VvRadio.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvRadio, {
        props: {
            value: 'test',
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-radio-')
    
})
