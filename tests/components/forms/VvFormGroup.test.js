
// ./tests/components/forms/VvFormGroup.test.js


import { mount } from '@vue/test-utils'
import { VvFormGroup } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvFormGroup.vue component mounts successfully', async () => {

    expect(VvFormGroup).toBeTruthy()

})



test('VvFormGroup.vue component accepts an object literal slot value with markup and text content', async () => {

    const id = 'test-id'
    const label = 'test-id'
    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvFormGroup, {
        props: {
            label: label,
            labelFor: id,
        },
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvFormGroup.vue component props toggle error, help, and success text content as expected', async () => {

    const id = 'test-id'
    const label = 'test label'
    
    const wrapper = mount(VvFormGroup, {
        props: {
            label: label,
            labelFor: id,
            displayError: true,
            displayHelp: true,
            displaySuccess: true,
        },
    })

    expect(wrapper.html()).toContain(id)
    expect(wrapper.html()).toContain(label)
    
})



test('VvFormGroup.vue component debug mode with no help/error/success text enabled returns an expected result', async () => {

    const wrapper = mount(VvFormGroup, {
        props: {
            label: 'debug label',
            labelFor: 'debug-id',
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-form-group-')
    
})



test('VvFormGroup.vue component debug mode with help/error/success text enabled returns an expected result', async () => {

    const wrapper = mount(VvFormGroup, {
        props: {
            label: 'debug label',
            labelFor: 'debug-id',
            displayError: true,
            displayHelp: true,
            displaySuccess: true,
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-form-group-')
    
})
