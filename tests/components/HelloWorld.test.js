// ./tests/ViteVueTsCompoPkgStarter.test.js

import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'



test('HelloWorld.vue component mounts successfully', async () => {

    expect(HelloWorld).toBeTruthy()

})



test('HelloWorld.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(HelloWorld, {
        props: {
            msg: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})
