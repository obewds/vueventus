// ./tests/configs/Selects.test.js

import { Selects } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Selects component returns a truthy value', async () => {

    expect(Selects).toBeTruthy()

})


test('Selects component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Selects.border).toBeTruthy()
    expect(Selects.display).toBeTruthy()
    expect(Selects.outline).toBe('')
    expect(Selects.ring).toBe('')
    expect(Selects.rounding).toBe('')
    expect(Selects.shadow).toBe('')
    expect(Selects.text).toBe('')
    expect(Selects.transition).toBeTruthy()

})


test('Selects component returns a truthy value for the "base()" method', async () => {

    const base = Selects.base()
    
    expect(base).toBeTruthy()

})


test('Selects.classes() method returns expected values', async () => {
    
    expect(Selects.classes('')).toContain(VvConfig.inputs.sizes['md'])
    expect(Selects.classes('2xl')).toContain(VvConfig.inputs.sizes['2xl'])
    expect(Selects.classes('xl')).toContain(VvConfig.inputs.sizes['xl'])
    expect(Selects.classes('lg')).toContain(VvConfig.inputs.sizes['lg'])
    expect(Selects.classes('md')).toContain(VvConfig.inputs.sizes['md'])
    expect(Selects.classes('sm')).toContain(VvConfig.inputs.sizes['sm'])
    expect(Selects.classes('xs')).toContain(VvConfig.inputs.sizes['xs'])

})
