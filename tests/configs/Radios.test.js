// ./tests/configs/Radios.test.js

import { Radios } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Radios component returns a truthy value', async () => {

    expect(Radios).toBeTruthy()

})


test('Radios component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Radios.baseColors).toBeTruthy()
    expect(Radios.border).toBe('')
    expect(Radios.outline).toBe('')
    expect(Radios.ring).toBeTruthy('')
    expect(Radios.rounding).toBe('')
    expect(Radios.shadow).toBe('')
    expect(Radios.transition).toBeTruthy()

})


test('Radios component returns a truthy value for the "base()" method', async () => {

    const base = Radios.base()
    
    expect(base).toBeTruthy()

})


test('Radios.classes() method returns expected values', async () => {
    
    expect(Radios.classes('')).toContain(VvConfig.radios.sizes['md'])
    expect(Radios.classes('2xl')).toContain(VvConfig.radios.sizes['2xl'])
    expect(Radios.classes('xl')).toContain(VvConfig.radios.sizes['xl'])
    expect(Radios.classes('lg')).toContain(VvConfig.radios.sizes['lg'])
    expect(Radios.classes('md')).toContain(VvConfig.radios.sizes['md'])
    expect(Radios.classes('sm')).toContain(VvConfig.radios.sizes['sm'])
    expect(Radios.classes('xs')).toContain(VvConfig.radios.sizes['xs'])

})
