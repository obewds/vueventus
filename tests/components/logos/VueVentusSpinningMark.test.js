
// ./tests/components/logos/VueVentusSpinningMark.test.js


import { mount } from '@vue/test-utils'
import { VueVentusSpinningMark } from '../../../src/index'



test('VueVentusSpinningMark.vue component mounts successfully', async () => {

    expect(VueVentusSpinningMark).toBeTruthy()

})



test('VueVentusSpinningMark.vue component returns the expected output when enable animation is false', async () => {

    const wrapper = mount(VueVentusSpinningMark, {
        props: {
            enableAnimation: false,
        },
    })

    expect(wrapper.html()).not.toContain('animate-')
    
})



test('VueVentusSpinningMark.vue component returns the expected output when enable animation is true', async () => {

    const wrapper = mount(VueVentusSpinningMark, {
        props: {
            enableAnimation: true,
        },
    })

    expect(wrapper.html()).toContain('animate-')
    
})



test('VueVentusSpinningMark.vue component returns the expected output when enable class fills is true', async () => {

    const wrapper = mount(VueVentusSpinningMark, {
        props: {
            enableClassFills: true,
        },
    })

    expect(wrapper.html()).toContain('class="fill-')
    
})
