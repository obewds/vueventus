// ./tests/components/selects/VvListbox.test.js


import { mount } from '@vue/test-utils'
import { VvListbox } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvListbox.vue component imports successfully', async () => {

    expect(VvListbox).toBeTruthy()

})



test('VvListbox.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<div>Fake Headless UI Clickable Label</div>`

    const wrapper = mount(VvListbox, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvListbox.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvListbox, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('<button')
    expect(wrapper.html()).toContain('</button')
    
})



test('VvListbox.vue component accepts basic props values and returns expected markup', async () => {

    const wrapper = mount(VvListbox, {
        props: {
            label: 'Testing Label:',
            listboxButtonColor: 'error',
            listboxOptionColor: 'error',
        },
    })

    expect(wrapper.html()).toContain('<button')
    expect(wrapper.html()).toContain('</button')

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('<li')
    expect(wrapper.html()).toContain('</li')

    await wrapper.find('li').trigger('click')

    expect(wrapper.html()).not.toContain('<li')
    expect(wrapper.html()).not.toContain('</li')
    
})



test('VvListbox.vue component debug mode returns an expected result with a label prop passed in', async () => {

    const wrapper = mount(VvListbox, {
        props: {
            label: 'Testing Label:',
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-listbox-')
    
})



test('VvListbox.vue component debug mode returns an expected result without a label prop passed in', async () => {

    const wrapper = mount(VvListbox, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-listbox-')

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('data-vv-listbox-prop-icon-size-classes')
    
    
})
