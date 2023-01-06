
// ./tests/components/elements/VvListItem.test.js


import { mount } from '@vue/test-utils'
import { VvListItem } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvListItem.vue component mounts successfully', async () => {

    expect(VvListItem).toBeTruthy()

})



test('VvListItem.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvListItem, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvListItem.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvListItem, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('li')
    
})



test('VvListItem.vue component returns an expected result when enableColoredSymbols is false', async () => {

    const wrapper = mount(VvListItem, {
        props: {
            enableColoredSymbols: false,
        },
    })

    expect(wrapper.html()).not.toContain('span')
    
})



test('VvListItem.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvListItem, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-list-item-')
    
})
