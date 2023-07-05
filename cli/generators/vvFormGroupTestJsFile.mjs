// ./cli/generators/vvFormGroupTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/forms/VvFormGroup.test.js

import { mount } from '@vue/test-utils'
import VvFormGroup from '../../../../src/components/vv/forms/VvFormGroup.vue'


test('VvFormGroup.test.vue component imports successfully', async () => {
    
    expect(VvFormGroup).toBeTruthy()

})


test('VvFormGroup.test.vue component handles a debug prop value of true successfully', async () => {

    const testLabel = 'Test Label'
    const testId = 'test-id'
    
    const wrapper = mount(VvFormGroup, {
        props: {
            debug: true,
            label: testLabel,
            labelFor: testId,
        },
    })

    expect(wrapper.html()).toContain('<div ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</div>')
    expect(wrapper.html()).toContain(testLabel)
    expect(wrapper.html()).toContain(testId)

})

`

return output

}
    