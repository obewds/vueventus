// ./cli/generators/bTestJsFile.mjs

export default function () {

const output = `// ./tests/pages/b.test.js

import { mount } from '@vue/test-utils'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import b from '../../src/pages/b.vue'


const head = createHead()
const pinia = createPinia()


test('b.vue page mounts successfully', async () => {
    
    expect(b).toBeTruthy()

})


test('b.vue page component renders the setup() output as expected', async () => {

    const wrapper = mount(b, {
        global: {
            plugins: [head, pinia],
        },
    })

    expect(wrapper.html()).toContain('<p>Hello I am B</p>')
    expect(wrapper.html()).toContain('<img src="')
    expect(wrapper.html()).toContain('" alt="">')
    expect(wrapper.html()).toContain('Prefetch Result:')
    
})

`

return output

}
