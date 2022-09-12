// ./cli/generators/vvColorModeButtonTestJsFile.mjs

// TODO add this file to vitest build processes

export default function () {

const output = `// ./tests/components/vv/buttons/VvColorModeButton.test.js

import { mount } from '@vue/test-utils'
import VvColorModeButton from '../../../../src/components/vv/buttons/VvColorModeButton.vue'


test('VvColorModeButton.test.vue component mounts successfully', async () => {
    
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


test('VvColorModeButton.vue component can check localStorage for a colorMode property stored during a prior user session', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark',
        },
        global: {
            mocks: {
                localStorage: {
                    colorMode: 'light',
                    setItem (key, item) {
                        this[key] = item
                    },
                    getItem (key) { 
                        return this[key]
                    }
                }
            },
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})

`

return output

}
