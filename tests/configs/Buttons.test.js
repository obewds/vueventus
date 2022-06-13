// ./tests/configs/Buttons.test.js

import { Buttons } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Buttons component returns a truthy value', async () => {

    expect(Buttons).toBeTruthy()

})


test('Buttons component returns a truthy object for "blockDisplay", "blockSizes", "border", "cursor", "disabled", "display", "focus", "sizes", "text" properties', async () => {

    expect(Buttons.blockDisplay).toBeTruthy()
    expect(Buttons.blockSizes).toBeTruthy()
    expect(Buttons.border).toBeTruthy()
    expect(Buttons.cursor).toBeTruthy()
    expect(Buttons.disabled).toBeTruthy()
    expect(Buttons.display).toBeTruthy()
    expect(Buttons.fabDisplay).toBeTruthy()
    expect(Buttons.fabSizes).toBeTruthy()
    expect(Buttons.focus).toBeTruthy()
    expect(Buttons.sizes).toBeTruthy()
    expect(Buttons.text).toBeTruthy()
    expect(Buttons.transition).toBeTruthy()

})


test('Buttons.blockClasses() method returns expected values', async () => {
    
    expect(Buttons.blockClasses('')).toContain(VvConfig.buttons.blockSizes['md'])
    expect(Buttons.blockClasses('4xl')).toContain(VvConfig.buttons.blockSizes['4xl'])
    expect(Buttons.blockClasses('3xl')).toContain(VvConfig.buttons.blockSizes['3xl'])
    expect(Buttons.blockClasses('2xl')).toContain(VvConfig.buttons.blockSizes['2xl'])
    expect(Buttons.blockClasses('xl')).toContain(VvConfig.buttons.blockSizes['xl'])
    expect(Buttons.blockClasses('lg')).toContain(VvConfig.buttons.blockSizes['lg'])
    expect(Buttons.blockClasses('md')).toContain(VvConfig.buttons.blockSizes['md'])
    expect(Buttons.blockClasses('sm')).toContain(VvConfig.buttons.blockSizes['sm'])
    expect(Buttons.blockClasses('xs')).toContain(VvConfig.buttons.blockSizes['xs'])
    expect(Buttons.blockClasses('2xs')).toContain(VvConfig.buttons.blockSizes['2xs'])
    expect(Buttons.blockClasses('3xs')).toContain(VvConfig.buttons.blockSizes['3xs'])
    expect(Buttons.blockClasses('4xs')).toContain(VvConfig.buttons.blockSizes['4xs'])

})


test('Buttons.classes() method returns expected values', async () => {
    
    expect(Buttons.classes('')).toContain(VvConfig.buttons.sizes['md'])
    expect(Buttons.classes('4xl')).toContain(VvConfig.buttons.sizes['4xl'])
    expect(Buttons.classes('3xl')).toContain(VvConfig.buttons.sizes['3xl'])
    expect(Buttons.classes('2xl')).toContain(VvConfig.buttons.sizes['2xl'])
    expect(Buttons.classes('xl')).toContain(VvConfig.buttons.sizes['xl'])
    expect(Buttons.classes('lg')).toContain(VvConfig.buttons.sizes['lg'])
    expect(Buttons.classes('md')).toContain(VvConfig.buttons.sizes['md'])
    expect(Buttons.classes('sm')).toContain(VvConfig.buttons.sizes['sm'])
    expect(Buttons.classes('xs')).toContain(VvConfig.buttons.sizes['xs'])
    expect(Buttons.classes('2xs')).toContain(VvConfig.buttons.sizes['2xs'])
    expect(Buttons.classes('3xs')).toContain(VvConfig.buttons.sizes['3xs'])
    expect(Buttons.classes('4xs')).toContain(VvConfig.buttons.sizes['4xs'])

})


test('Buttons.fabClasses() method returns expected values', async () => {
    
    expect(Buttons.fabClasses('')).toContain(VvConfig.buttons.fabSizes['md'])
    expect(Buttons.fabClasses('4xl')).toContain(VvConfig.buttons.fabSizes['4xl'])
    expect(Buttons.fabClasses('3xl')).toContain(VvConfig.buttons.fabSizes['3xl'])
    expect(Buttons.fabClasses('2xl')).toContain(VvConfig.buttons.fabSizes['2xl'])
    expect(Buttons.fabClasses('xl')).toContain(VvConfig.buttons.fabSizes['xl'])
    expect(Buttons.fabClasses('lg')).toContain(VvConfig.buttons.fabSizes['lg'])
    expect(Buttons.fabClasses('md')).toContain(VvConfig.buttons.fabSizes['md'])
    expect(Buttons.fabClasses('sm')).toContain(VvConfig.buttons.fabSizes['sm'])
    expect(Buttons.fabClasses('xs')).toContain(VvConfig.buttons.fabSizes['xs'])
    expect(Buttons.fabClasses('2xs')).toContain(VvConfig.buttons.fabSizes['2xs'])
    expect(Buttons.fabClasses('3xs')).toContain(VvConfig.buttons.fabSizes['3xs'])
    expect(Buttons.fabClasses('4xs')).toContain(VvConfig.buttons.fabSizes['4xs'])

})


test('Buttons.getBlockSizeClasses() method returns expected values', async () => {
    
    expect(Buttons.getBlockSizeClasses('')).toContain(VvConfig.buttons.blockSizes['md'])
    expect(Buttons.getBlockSizeClasses('4xl')).toContain(VvConfig.buttons.blockSizes['4xl'])
    expect(Buttons.getBlockSizeClasses('3xl')).toContain(VvConfig.buttons.blockSizes['3xl'])
    expect(Buttons.getBlockSizeClasses('2xl')).toContain(VvConfig.buttons.blockSizes['2xl'])
    expect(Buttons.getBlockSizeClasses('xl')).toContain(VvConfig.buttons.blockSizes['xl'])
    expect(Buttons.getBlockSizeClasses('lg')).toContain(VvConfig.buttons.blockSizes['lg'])
    expect(Buttons.getBlockSizeClasses('md')).toContain(VvConfig.buttons.blockSizes['md'])
    expect(Buttons.getBlockSizeClasses('sm')).toContain(VvConfig.buttons.blockSizes['sm'])
    expect(Buttons.getBlockSizeClasses('xs')).toContain(VvConfig.buttons.blockSizes['xs'])
    expect(Buttons.getBlockSizeClasses('2xs')).toContain(VvConfig.buttons.blockSizes['2xs'])
    expect(Buttons.getBlockSizeClasses('3xs')).toContain(VvConfig.buttons.blockSizes['3xs'])
    expect(Buttons.getBlockSizeClasses('4xs')).toContain(VvConfig.buttons.blockSizes['4xs'])

})


test('Buttons.getFabSizeClasses() method returns expected values', async () => {
    
    expect(Buttons.getFabSizeClasses('')).toContain(VvConfig.buttons.fabSizes['md'])
    expect(Buttons.getFabSizeClasses('4xl')).toContain(VvConfig.buttons.fabSizes['4xl'])
    expect(Buttons.getFabSizeClasses('3xl')).toContain(VvConfig.buttons.fabSizes['3xl'])
    expect(Buttons.getFabSizeClasses('2xl')).toContain(VvConfig.buttons.fabSizes['2xl'])
    expect(Buttons.getFabSizeClasses('xl')).toContain(VvConfig.buttons.fabSizes['xl'])
    expect(Buttons.getFabSizeClasses('lg')).toContain(VvConfig.buttons.fabSizes['lg'])
    expect(Buttons.getFabSizeClasses('md')).toContain(VvConfig.buttons.fabSizes['md'])
    expect(Buttons.getFabSizeClasses('sm')).toContain(VvConfig.buttons.fabSizes['sm'])
    expect(Buttons.getFabSizeClasses('xs')).toContain(VvConfig.buttons.fabSizes['xs'])
    expect(Buttons.getFabSizeClasses('2xs')).toContain(VvConfig.buttons.fabSizes['2xs'])
    expect(Buttons.getFabSizeClasses('3xs')).toContain(VvConfig.buttons.fabSizes['3xs'])
    expect(Buttons.getFabSizeClasses('4xs')).toContain(VvConfig.buttons.fabSizes['4xs'])

})


test('Buttons.getSizeClasses() method returns expected values', async () => {
    
    expect(Buttons.getSizeClasses('')).toContain(VvConfig.buttons.sizes['md'])
    expect(Buttons.getSizeClasses('4xl')).toContain(VvConfig.buttons.sizes['4xl'])
    expect(Buttons.getSizeClasses('3xl')).toContain(VvConfig.buttons.sizes['3xl'])
    expect(Buttons.getSizeClasses('2xl')).toContain(VvConfig.buttons.sizes['2xl'])
    expect(Buttons.getSizeClasses('xl')).toContain(VvConfig.buttons.sizes['xl'])
    expect(Buttons.getSizeClasses('lg')).toContain(VvConfig.buttons.sizes['lg'])
    expect(Buttons.getSizeClasses('md')).toContain(VvConfig.buttons.sizes['md'])
    expect(Buttons.getSizeClasses('sm')).toContain(VvConfig.buttons.sizes['sm'])
    expect(Buttons.getSizeClasses('xs')).toContain(VvConfig.buttons.sizes['xs'])
    expect(Buttons.getSizeClasses('2xs')).toContain(VvConfig.buttons.sizes['2xs'])
    expect(Buttons.getSizeClasses('3xs')).toContain(VvConfig.buttons.sizes['3xs'])
    expect(Buttons.getSizeClasses('4xs')).toContain(VvConfig.buttons.sizes['4xs'])

})
