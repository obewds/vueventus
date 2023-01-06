// ./tests/components/forms/VvQuadFormGroup.test.js


import { mount } from '@vue/test-utils'
import { VvQuadFormGroup } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvQuadFormGroup.vue component mounts successfully', async () => {

    expect(VvQuadFormGroup).toBeTruthy()

})



test('VvQuadFormGroup.vue component accepts an object literal slot value with markup and text content', async () => {

    const id = 'test-id'
    const label = 'test-id'
    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvQuadFormGroup, {
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



test('VvQuadFormGroup.vue component props toggle error, help, and success text content as expected', async () => {

    const id = 'test-id'
    const label = 'test label'
    
    const wrapper = mount(VvQuadFormGroup, {
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



test('VvQuadFormGroup.vue component debug mode with no help/error/success returns an expected result', async () => {

    const wrapper = mount(VvQuadFormGroup, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-quad-form-group-')
    
})



test('VvQuadFormGroup.vue component debug mode with help/error/success returns an expected result', async () => {

    const wrapper = mount(VvQuadFormGroup, {
        props: {
            displayError: true,
            displayHelp: true,
            displaySuccess: true,
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-quad-form-group-')
    
})
