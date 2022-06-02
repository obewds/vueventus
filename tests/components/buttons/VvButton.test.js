
// ./tests/components/buttons/VvButton.test.js


import { mount } from '@vue/test-utils'
import { VvButton } from '../../../src/index'



test('VvButton.vue component mounts successfully', async () => {

    expect(VvButton).toBeTruthy()

})



test('VvButton.vue component accepts an object literal value with markup and text content', async () => {

    const testString = `<div>Test String Value</div>`

    const wrapper = mount(VvButton, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})
