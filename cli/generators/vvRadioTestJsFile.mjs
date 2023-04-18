// ./cli/generators/vvRadioTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/inputs/VvRadio.test.js

import { mount } from '@vue/test-utils'
import VvRadio from '../../../../src/components/vv/inputs/VvRadio.vue'


test('VvRadio.test.vue component imports successfully', async () => {
    
    expect(VvRadio).toBeTruthy()

})



test('VvRadio.vue component returns a radio input using the component type prop', async () => {

    const testString = 'test-value'

    const wrapper = mount(VvRadio, {
        props: {
            value: testString,
            checked: true,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})

`

return output

}
