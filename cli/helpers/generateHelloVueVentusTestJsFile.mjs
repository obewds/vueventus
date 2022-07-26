// ./cli/helpers/generateHelloVueVentusTestJsFile.mjs

export default function () {

const output = `// ./tests/components/HelloVueVentus.test.js

import { mount } from '@vue/test-utils'
import HelloVueVentus from '../../src/components/HelloVueVentus.vue'


test('HelloVueVentus.vue component mounts successfully', async () => {
    
    expect(HelloVueVentus).toBeTruthy()

})


test('HelloVueVentus.vue component accepts an object literal slot value with markup and text content', async () => {

    const testObjLiteral = ` + "`" + `<div>Hello VueVentus!!!</div>` + "`" + `

    const wrapper = mount(HelloVueVentus, {
        slots: { default: testObjLiteral },
    })

    expect(wrapper.html()).toContain(testObjLiteral)

})

`

return output
        
}
