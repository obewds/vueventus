// ./tests/configs/Textareas.test.js

import { Textareas } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Textareas component returns a truthy value', async () => {

    expect(Textareas).toBeTruthy()

})


test('Textareas component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Textareas.border).toBeTruthy()
    expect(Textareas.display).toBeTruthy()
    expect(Textareas.outline).toBe('')
    expect(Textareas.placeholder).toBeTruthy()
    expect(Textareas.ring).toBe('')
    expect(Textareas.rounding).toBe('')
    expect(Textareas.shadow).toBe('')
    expect(Textareas.text).toBe('')
    expect(Textareas.transition).toBeTruthy()

})


test('Textareas component returns a truthy value for the "base()" method', async () => {

    const base = Textareas.base()
    
    expect(base).toBeTruthy()

})


test('Textareas.classes() method returns expected values', async () => {
    
    expect(Textareas.classes('')).toContain(VvConfig.textareas.sizes['md'])
    expect(Textareas.classes('2xl')).toContain(VvConfig.textareas.sizes['2xl'])
    expect(Textareas.classes('xl')).toContain(VvConfig.textareas.sizes['xl'])
    expect(Textareas.classes('lg')).toContain(VvConfig.textareas.sizes['lg'])
    expect(Textareas.classes('md')).toContain(VvConfig.textareas.sizes['md'])
    expect(Textareas.classes('sm')).toContain(VvConfig.textareas.sizes['sm'])
    expect(Textareas.classes('xs')).toContain(VvConfig.textareas.sizes['xs'])

})


test('Textareas.getRowSize() method returns expected values', async () => {
    
    expect(Textareas.getRowSize('')).toBe(VvConfig.textareas.rowSizes['md'])
    expect(Textareas.getRowSize('2xl')).toBe(VvConfig.textareas.rowSizes['2xl'])
    expect(Textareas.getRowSize('xl')).toBe(VvConfig.textareas.rowSizes['xl'])
    expect(Textareas.getRowSize('lg')).toBe(VvConfig.textareas.rowSizes['lg'])
    expect(Textareas.getRowSize('md')).toBe(VvConfig.textareas.rowSizes['md'])
    expect(Textareas.getRowSize('sm')).toBe(VvConfig.textareas.rowSizes['sm'])
    expect(Textareas.getRowSize('xs')).toBe(VvConfig.textareas.rowSizes['xs'])

})
