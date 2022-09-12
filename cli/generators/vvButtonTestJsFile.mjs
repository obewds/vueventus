// ./cli/generators/vvButtonTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/buttons/VvButton.test.js

import { mount } from '@vue/test-utils'
import VvButton from '../../../../src/components/vv/buttons/VvButton.vue'
import appVv from '../../../../src/app.vv'


test('VvButton.vue component mounts successfully', async () => {
    
    expect(VvButton).toBeTruthy()

})


test('VvButton.vue component accepts an object literal default slot value of markup and text', async () => {

    const testString = ` + "`<div>Test</div>`" + `

    const wrapper = mount(VvButton, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="button"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')
    expect(wrapper.html()).toContain(testString)
    
})


test('VvButton.vue component type prop works as expected and validates', async () => {

    const wrapper = mount(VvButton, {
        props: { type: 'submit' },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="submit"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')

})


test('VvButton.vue component props all work as expected', async () => {

    const wrapper = mount(VvButton, {
        props: {
            block: appVv.defaults.VvButton.block,
            color: appVv.defaults.VvButton.color,
            fab: appVv.defaults.VvButton.fab,
            palette: appVv.defaults.VvButton.palette,
            size: appVv.defaults.VvButton.size,
            type: appVv.defaults.VvButton.type,
        },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="button"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')
    
})

`

return output

}
