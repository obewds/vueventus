// ./cli/generators/bTestJsFile.mjs

export default function () {

const output = `// ./tests/pages/b.test.js

import { mount } from '@vue/test-utils'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { useRootStore } from '../../src/store/root'
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


test('app pinia store initialization works as expected using b.vue page component as a proxy', async () => {

    const wrapper = mount(b, {
        global: {
            plugins: [head, pinia],
        },
    })

    // force initialization of a pinia root store to trigger code coverage
    const testingStore = useRootStore().initialize()
    
    expect(wrapper.html()).toBeTruthy()

})

`

return output

}
