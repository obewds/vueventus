// ./cli/generators/vvPrismVarsTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/elements/VvPrismVars.test.js

import { mount } from '@vue/test-utils'
import VvPrismVars from '../../../../src/components/vv/elements/VvPrismVars.vue'


test('VvPrismVars.test.vue component imports successfully', async () => {
    
    expect(VvPrismVars).toBeTruthy()

})


test('VvPrismVars.vue component accepts validating prop values and returns truthy', async () => {

    const wrapper = mount(VvPrismVars, {
        props: {
            commentStyle: 'italic',
            urlDecoration: 'underline'
        },
    })

    expect(wrapper.html()).toBeTruthy()

})


test('VvPrismVars.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvPrismVars, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-prism-vars-')

})

`

return output

}
