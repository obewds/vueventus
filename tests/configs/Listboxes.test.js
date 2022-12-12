// ./tests/configs/Listboxes.test.js

import { Listboxes } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Listboxes component returns a truthy value', async () => {

    expect(Listboxes).toBeTruthy()

})


test('Listboxes component returns a truthy object for specific properties', async () => {

    expect(Listboxes.border).toBeTruthy()
    expect(Listboxes.display).toBeTruthy()
    expect(Listboxes.outline).toBe('')
    expect(Listboxes.ring).toBe('')
    expect(Listboxes.rounding).toBe('')
    expect(Listboxes.shadow).toBe('')
    expect(Listboxes.text).toBe('')
    expect(Listboxes.transition).toBeTruthy()

})


test('Listboxes component returns a truthy value for the "base()" method', async () => {

    const base = Listboxes.base()
    
    expect(base).toBeTruthy()

})


test('Listboxes.classes() method returns expected values', async () => {
    
    expect(Listboxes.classes('')).toContain(VvConfig.inputs.sizes['md'])
    expect(Listboxes.classes('2xl')).toContain(VvConfig.inputs.sizes['2xl'])
    expect(Listboxes.classes('xl')).toContain(VvConfig.inputs.sizes['xl'])
    expect(Listboxes.classes('lg')).toContain(VvConfig.inputs.sizes['lg'])
    expect(Listboxes.classes('md')).toContain(VvConfig.inputs.sizes['md'])
    expect(Listboxes.classes('sm')).toContain(VvConfig.inputs.sizes['sm'])
    expect(Listboxes.classes('xs')).toContain(VvConfig.inputs.sizes['xs'])

})

