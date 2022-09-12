// ./cli/generators/vvInputTestJsFile.mjs

// TODO add this file to vitest build processes

export default function () {

const output = `// ./tests/components/vv/inputs/VvInput.test.js

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvInput from '../../../../src/components/vv/inputs/VvInput.vue'


test('VvInput.test.vue component mounts successfully', async () => {
    
    expect(VvInput).toBeTruthy()

})



test('VvInput.vue component returns a type email input using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvInput, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvInput.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvInput, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})

`

return output

}
