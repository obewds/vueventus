// ./tests/configs/Inputs.test.js

import { Inputs } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Inputs component returns a truthy value', async () => {

    expect(Inputs).toBeTruthy()

})


test('Inputs component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Inputs.border).toBeTruthy()
    expect(Inputs.display).toBeTruthy()
    expect(Inputs.outline).toBe('')
    expect(Inputs.placeholder).toBeTruthy()
    expect(Inputs.ring).toBe('')
    expect(Inputs.rounding).toBe('')
    expect(Inputs.shadow).toBe('')
    expect(Inputs.text).toBe('')
    expect(Inputs.transition).toBeTruthy()

})


test('Inputs component returns a truthy value for the "base()" method', async () => {

    const base = Inputs.base()
    
    expect(base).toBeTruthy()

})


test('Inputs.classes() method returns expected values', async () => {
    
    expect(Inputs.classes('')).toContain(VvConfig.inputs.sizes['md'])
    expect(Inputs.classes('2xl')).toContain(VvConfig.inputs.sizes['2xl'])
    expect(Inputs.classes('xl')).toContain(VvConfig.inputs.sizes['xl'])
    expect(Inputs.classes('lg')).toContain(VvConfig.inputs.sizes['lg'])
    expect(Inputs.classes('md')).toContain(VvConfig.inputs.sizes['md'])
    expect(Inputs.classes('sm')).toContain(VvConfig.inputs.sizes['sm'])
    expect(Inputs.classes('xs')).toContain(VvConfig.inputs.sizes['xs'])

})
