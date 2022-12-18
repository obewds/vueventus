// ./cli/generators/vvElTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/elements/VvEl.test.js

import { mount } from '@vue/test-utils'
import VvEl from '../../../../src/components/vv/elements/VvEl.vue'


test('VvEl.test.vue component mounts successfully', async () => {
    
    expect(VvEl).toBeTruthy()

})


test('VvEl.vue component accepts a tag prop that validates', async () => {

    const wrapper = mount(VvEl, {
        props: {
            tag: 'div',
        },
    })

    expect(wrapper.html()).toBeTruthy()

})

`

return output

}
