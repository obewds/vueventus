// ./cli/generators/vvListTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/lists/VvList.test.js

import { mount } from '@vue/test-utils'
import VvList from '../../../../src/components/vv/lists/VvList.vue'


test('VvList.test.vue component mounts successfully', async () => {
    
    expect(VvList).toBeTruthy()

})


test('VvList.vue component type prop works as expected and validates', async () => {

    const wrapper = mount(VvList, {
        props: {
            tag: 'ol'
        },
    })

    expect(wrapper.html()).toContain('<ol ')
    expect(wrapper.html()).toContain('role="list"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</ol>')

})


test('VvList.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvList, {
        props: {
            debug: true,
            tag: 'ol'
        },
    })

    expect(wrapper.html()).toContain('data-vv-list-')

})

`

return output

}
