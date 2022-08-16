// ./tests/configs/Checkboxes.test.js

import { Checkboxes } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Checkboxes component returns a truthy value', async () => {

    expect(Checkboxes).toBeTruthy()

})


test('Checkboxes component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Checkboxes.baseColors).toBeTruthy()
    expect(Checkboxes.border).toBe('')
    expect(Checkboxes.outline).toBe('')
    expect(Checkboxes.ring).toBeTruthy('')
    expect(Checkboxes.rounding).toBeTruthy('')
    expect(Checkboxes.shadow).toBe('')
    expect(Checkboxes.transition).toBeTruthy()

})


test('Checkboxes component returns a truthy value for the "base()" method', async () => {

    const base = Checkboxes.base()
    
    expect(base).toBeTruthy()

})


test('Checkboxes.classes() method returns expected values', async () => {
    
    expect(Checkboxes.classes('')).toContain(VvConfig.checkboxes.sizes['md'])
    expect(Checkboxes.classes('2xl')).toContain(VvConfig.checkboxes.sizes['2xl'])
    expect(Checkboxes.classes('xl')).toContain(VvConfig.checkboxes.sizes['xl'])
    expect(Checkboxes.classes('lg')).toContain(VvConfig.checkboxes.sizes['lg'])
    expect(Checkboxes.classes('md')).toContain(VvConfig.checkboxes.sizes['md'])
    expect(Checkboxes.classes('sm')).toContain(VvConfig.checkboxes.sizes['sm'])
    expect(Checkboxes.classes('xs')).toContain(VvConfig.checkboxes.sizes['xs'])

})
