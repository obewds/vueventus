// ./tests/helpers/forceBodyClick.test.js

import { mount } from '@vue/test-utils'
import { forceBodyClick } from '../../src/index'


test('forceBodyClick helper module returns a truthy value', async () => {
    
    expect(forceBodyClick).toBeTruthy()

})


test('forceBodyClick helper module handles a body click event', async () => {

    const testButtonComponent = {
        template: '<button @click="handleClick">Test Button</button>',
        methods: {
            handleClick() {
                forceBodyClick()
            }
        }
    }

    const wrapper = mount(testButtonComponent)
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('Test Button')

})
