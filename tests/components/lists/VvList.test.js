
// ./tests/components/elements/VvList.test.js


import { mount } from '@vue/test-utils'
import { VvList } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvList.vue component imports successfully', async () => {

    expect(VvList).toBeTruthy()

})



test('VvList.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<li>Test String Value</li>`

    const wrapper = mount(VvList, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvList.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvList, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('<ul')
    expect(wrapper.html()).toContain('</ul>')
    
})



test('VvList.vue component returns an expected result when enableColoredSymbols is false', async () => {

    const wrapper = mount(VvList, {
        props: {
            markerColor: 'primary',
            markerPalette: 'default',
            tag: 'ol',
        },
    })

    expect(wrapper.html()).toContain('<ol')
    expect(wrapper.html()).toContain('</ol>')
    
})



test('VvList.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvList, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-list-')
    
})
