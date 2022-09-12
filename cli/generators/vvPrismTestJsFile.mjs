// ./cli/generators/vvPrismTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/elements/VvPrism.test.js

import { mount } from '@vue/test-utils'
import VvPrism from '../../../../src/components/vv/elements/VvPrism.vue'


test('VvPrism.test.vue component mounts successfully', async () => {
    
    expect(VvPrism).toBeTruthy()

})


test('VvPrism.vue component accepts validating prop values and returns truthy', async () => {
    
    const wrapper = mount(VvPrism, {
        props: {
            prismVars: true
        },
        slots: { default: 'this is a test' },
    })

    expect(wrapper.html()).toBeTruthy()

})

`

return output

}
