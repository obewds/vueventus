// ./cli/generators/vvCheckboxTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/inputs/VvCheckbox.test.js

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvCheckbox from '../../../../src/components/vv/inputs/VvCheckbox.vue'


test('VvCheckbox.test.vue component imports successfully', async () => {
    
    expect(VvCheckbox).toBeTruthy()

})



test('VvCheckbox.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvCheckbox, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})


test('VvCheckbox.vue component can successfully ingest and output the expected data-test attribute value containing the passed in hex values props', async () => {
    
    const wrapper = mount(VvCheckbox, {
        props: {
            lightCheckHex: '#ffffff',
            darkCheckHex: '#000000',
        },
    })

    expect(wrapper.html()).toContain('ffffff')
    expect(wrapper.html()).toContain('000000')
    
})

`

return output

}
