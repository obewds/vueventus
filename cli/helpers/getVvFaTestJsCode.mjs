// ./cli/helpers/getVvFaTestJsCode.mjs

export default function (isPro = false) {

let fsSrcImport = `import '../../../../src/fontAwesome'`

if (isPro === true) {
    fsSrcImport = `import '../../../../src/fontAwesomePro'`
}

return `// ./tests/components/vv/elements/VvFa.test.js

import { mount } from '@vue/test-utils'
import VvFa from '../../../../src/components/vv/elements/VvFa.vue'
${fsSrcImport}


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


test('VvFa.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvFa, {
        props: {
            debug: true,
        },
    })

    expect(wrapper.html()).toContain('data-vv-fa-')

})

`

}
