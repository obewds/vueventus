// ./cli/generators/vvScrollUpTestJsFile

export default function () {

const output = `// ./tests/components/vv/buttons/VvScrollUp.test.js

import { mount } from '@vue/test-utils'
import VvScrollUp from '../../../../src/components/vv/buttons/VvScrollUp.vue'


test('VvScrollUp.test.vue component mounts successfully', async () => {
    
    expect(VvScrollUp).toBeTruthy()

})


test('VvScrollUp.vue component returns markup if passed a true value for the isVisible prop', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    expect(wrapper.html()).toContain('button')

})


test('VvScrollUp.vue component is impacted by a click event as expected', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))
    
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('button')

})

`

return output

}
