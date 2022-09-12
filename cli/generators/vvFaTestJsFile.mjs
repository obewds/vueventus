// ./cli/generators/vvFaTestJsFile.mjs

// TODO add this file to vitest build processes

export default function () {

const output = `// ./tests/components/vv/elements/VvFa.test.js

import { mount } from '@vue/test-utils'
import VvFa from '../../../../src/components/vv/elements/VvFa.vue'
import '../../../../src/fontAwesomePro'


test('VvFa.test.vue component mounts successfully', async () => {
    
    expect(VvFa).toBeTruthy()

})


test('VvFa.vue component accepts family and icon prop values and returns/renders an svg element', async () => {

    const wrapper = mount(VvFa, {
        props: {
            family: 'fas',
            size: '1x'
        },
    })

    expect(wrapper.html()).toBeTruthy()

})

`

return output

}
