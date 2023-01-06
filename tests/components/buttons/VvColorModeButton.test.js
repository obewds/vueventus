
// ./tests/components/buttons/VvColorModeButton.test.js


import { mount } from '@vue/test-utils'
import { VvColorModeButton } from '../../../src/index'



test('VvColorModeButton.vue component mounts successfully', async () => {

    expect(VvColorModeButton).toBeTruthy()

})



test('VvColorModeButton.vue component returns an expected output when the mode prop = "dark"', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark',
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})



test('VvColorModeButton.vue component returns an expected output when the mode prop = "light"', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'light',
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})


test('VvColorModeButton.vue toggles a "dark" mode icon to a "light" mode icon and vice versa', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark'
        }
    })

    const initSvgPath = wrapper.find('path').html()

    await wrapper.find('button').trigger('click')

    const svgPath = wrapper.find('path').html()

    expect(initSvgPath).not.toBe(svgPath)

    await wrapper.find('button').trigger('click')

    const backToOriginalPath = wrapper.find('path').html()

    expect(initSvgPath).toBe(backToOriginalPath)

})



test('VvColorModeButton.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-color-mode-button-')
    
})
