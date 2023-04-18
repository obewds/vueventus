// ./cli/generators/vvNuxtRouterLinkTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/anchors/VvNuxtRouterLink.test.js

import { mount, RouterLinkStub } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvNuxtRouterLink from '../../../../src/components/vv/anchors/VvNuxtRouterLink.vue'


test('VvNuxtRouterLink.vue component imports successfully', async () => {
    
    expect(VvNuxtRouterLink).toBeTruthy()

})


test('VvNuxtRouterLink.vue component accepts an object literal default slot value of markup and text', async () => {

    const testString = ` + "`<div>Test</div>`" + `

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
        },
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    expect(wrapper.html()).toContain(testString)
    
})



test('VvNuxtRouterLink.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            provide: {
                vv: VvConfig,
            },
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvNuxtRouterLink.vue component returns an expected result when prop button is true', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
            button: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvNuxtRouterLink.vue component returns an expected result when props button and buttonBlock are true', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
            button: true,
            buttonBlock: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvNuxtRouterLink.vue component returns an expected result when props button and buttonFab are true', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
            button: true,
            buttonFab: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvNuxtRouterLink.vue component returns an expected result when props button, palette, and color are defined', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            to: '/',
            button: true,
            palette: 'solid',
            color: 'default',
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvNuxtRouterLink.vue component debug mode returns an expected result', async () => {

    const wrapper = mount(VvNuxtRouterLink, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub,
            },
        },
        props: {
            debug: true,
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('data-vv-nuxt-router-link-')
    
})

`

return output

}
    