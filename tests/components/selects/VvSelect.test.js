// ./tests/components/selects/VvSelect.test.js


import { mount } from '@vue/test-utils'
import { VvSelect } from '../../../src/index'
import { VvConfig } from '../../../src/index'



test('VvSelect.vue component mounts successfully', async () => {

    expect(VvSelect).toBeTruthy()

})



test('VvSelect.vue component accepts an object literal slot value with markup and text content', async () => {

    const testString = `<option value="test">Test Option Value</option>`

    const wrapper = mount(VvSelect, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})


/*
test('VvSelect.vue component returns a type email input using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvSelect, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})
*/


test('VvSelect.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvSelect, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('select')
    
})



test('VvSelect.vue component emits the update:modelValue value as expected', async () => {

    const testSelectOpts = `<option value="">Select Option</option>`
                         + `<option value="one">Test Option One</option>`
                         + `<option value="two" selected>Test Option Two</option>`
    
    const wrapper = mount(VvSelect, {
        slots: {
            default: testSelectOpts,
        },
    })

    /*
    const select = wrapper.find('select')

    console.log(' ')
    console.log('select.html():')
    console.log(select.html())
    console.log(' ')

    await select.setValue('one')

    console.log(' ')
    console.log('select.html() (after value set to "one"):')
    console.log(select.html())
    console.log(' ')

    const updateModelValue = wrapper.emitted('update:modelValue')

    console.log(' ')
    console.log('wrapper.emitted() (after value set to "one"):')
    console.log(wrapper.emitted())
    console.log(' ')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValue).toHaveLength(1)
    // expect(updateModelValue[0]).toEqual(['one'])

    await select.setValue('two')

    const updateModelValueTwo = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValueTwo).toHaveLength(2)
    expect(updateModelValueTwo[1]).toEqual(['two'])
    */







    // console.log(' ')
    // console.log('wrapper.html() before manipulation:')
    // console.log(wrapper.html())
    // console.log(' ')
  
    await wrapper.setValue('one')

    const updateModelValueOne = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValueOne).toHaveLength(1)
    expect(updateModelValueOne[0]).toEqual(['one'])

    // console.log(' ')
    // console.log('wrapper.html() after value set to "one":')
    // console.log(wrapper.html())
    // console.log(' ')
  
    await wrapper.setValue('two')

    const updateModelValueTwo = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValueTwo).toHaveLength(2)
    expect(updateModelValueTwo[1]).toEqual(['two'])

    // console.log(' ')
    // console.log('wrapper.html() after value set to "two":')
    // console.log(wrapper.html())
    // console.log(' ')

    
})


/*
test('VvSelect.vue component child option element trigger the update:modelValue emit value as expected', async () => {

    const testSelectOpts = `<option value="">Select Option</option>`
                         + `<option value="one">Test Option One</option>`
                         + `<option value="two" selected>Test Option Two</option>`
    
    const wrapper = mount(VvSelect, {
        slots: {
            default: testSelectOpts,
        },
    })

    await wrapper.find('select').trigger('click')
    await wrapper.find('option[value="one"]').trigger('click')
    await wrapper.setValue('one')

    const updateModelValueOne = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValueOne).toHaveLength(1)
    expect(updateModelValueOne[0]).toEqual(['one'])

    await wrapper.find('select').trigger('click')
    await wrapper.find('option[value="two"]').trigger('click')
    await wrapper.setValue('two')

    const updateModelValueTwo = wrapper.emitted('update:modelValue')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(updateModelValueTwo).toHaveLength(2)
    expect(updateModelValueTwo[1]).toEqual(['two'])

    // const select = wrapper.find('select')

    // const options = select.findAll('option')

    // await options.at(1).setSelected()

    // await wrapper.setValue('one')

    // expect(wrapper.value).toBe('one')


  
    // await wrapper.setValue('one')

    // const updateModelValueOne = wrapper.emitted('update:modelValue')

    // console.log('updateModelValueOne:')
    // console.log(updateModelValueOne)

    // expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    // expect(updateModelValueOne).toHaveLength(1)
    // expect(updateModelValueOne[0]).toEqual(['one'])
  
    // await wrapper.setValue('two')

    // const updateModelValueTwo = wrapper.emitted('update:modelValue')

    // console.log('updateModelValueTwo:')
    // console.log(updateModelValueTwo)

    // expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    // expect(updateModelValueTwo).toHaveLength(2)
    // expect(updateModelValueTwo[1]).toEqual(['two'])
    
})
*/
