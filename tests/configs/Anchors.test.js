// ./tests/configs/Anchors.test.js

import { Anchors } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Anchors component returns a truthy value', async () => {

    expect(Anchors).toBeTruthy()

})


test('Anchors component returns a truthy value for "cursor", "disabled", "display", "focus" and "text" properties', async () => {

    expect(Anchors.cursor).toBeTruthy()
    expect(Anchors.display).toBe('')
    expect(Anchors.focus).toBe('')
    expect(Anchors.text).toBeTruthy()
    expect(Anchors.transition).toBeTruthy()

})


test('Anchors component returns a truthy value for the "base()" method', async () => {

    const base = Anchors.base()
    
    expect(base).toBeTruthy()

})


test('Anchors.classes() method returns expected values', async () => {
    
    expect(Anchors.classes('')).toContain(VvConfig.anchors.sizes['md'])
    expect(Anchors.classes('12xl')).toContain(VvConfig.anchors.sizes['12xl'])
    expect(Anchors.classes('11xl')).toContain(VvConfig.anchors.sizes['11xl'])
    expect(Anchors.classes('10xl')).toContain(VvConfig.anchors.sizes['10xl'])
    expect(Anchors.classes('9xl')).toContain(VvConfig.anchors.sizes['9xl'])
    expect(Anchors.classes('8xl')).toContain(VvConfig.anchors.sizes['8xl'])
    expect(Anchors.classes('7xl')).toContain(VvConfig.anchors.sizes['7xl'])
    expect(Anchors.classes('6xl')).toContain(VvConfig.anchors.sizes['6xl'])
    expect(Anchors.classes('5xl')).toContain(VvConfig.anchors.sizes['5xl'])
    expect(Anchors.classes('4xl')).toContain(VvConfig.anchors.sizes['4xl'])
    expect(Anchors.classes('3xl')).toContain(VvConfig.anchors.sizes['3xl'])
    expect(Anchors.classes('2xl')).toContain(VvConfig.anchors.sizes['2xl'])
    expect(Anchors.classes('xl')).toContain(VvConfig.anchors.sizes['xl'])
    expect(Anchors.classes('lg')).toContain(VvConfig.anchors.sizes['lg'])
    expect(Anchors.classes('md')).toContain(VvConfig.anchors.sizes['md'])
    expect(Anchors.classes('sm')).toContain(VvConfig.anchors.sizes['sm'])
    expect(Anchors.classes('xs')).toContain(VvConfig.anchors.sizes['xs'])
    expect(Anchors.classes('2xs')).toContain(VvConfig.anchors.sizes['2xs'])
    expect(Anchors.classes('3xs')).toContain(VvConfig.anchors.sizes['3xs'])
    expect(Anchors.classes('4xs')).toContain(VvConfig.anchors.sizes['4xs'])
    expect(Anchors.classes('5xs')).toContain(VvConfig.anchors.sizes['5xs'])

})


test('Anchors.getSizeClasses() method returns expected values', async () => {

    expect(Anchors.getSizeClasses('')).toContain(VvConfig.anchors.sizes['md'])
    expect(Anchors.getSizeClasses('12xl')).toContain(VvConfig.anchors.sizes['12xl'])
    expect(Anchors.getSizeClasses('11xl')).toContain(VvConfig.anchors.sizes['11xl'])
    expect(Anchors.getSizeClasses('10xl')).toContain(VvConfig.anchors.sizes['10xl'])
    expect(Anchors.getSizeClasses('9xl')).toContain(VvConfig.anchors.sizes['9xl'])
    expect(Anchors.getSizeClasses('8xl')).toContain(VvConfig.anchors.sizes['8xl'])
    expect(Anchors.getSizeClasses('7xl')).toContain(VvConfig.anchors.sizes['7xl'])
    expect(Anchors.getSizeClasses('6xl')).toContain(VvConfig.anchors.sizes['6xl'])
    expect(Anchors.getSizeClasses('5xl')).toContain(VvConfig.anchors.sizes['5xl'])
    expect(Anchors.getSizeClasses('4xl')).toContain(VvConfig.anchors.sizes['4xl'])
    expect(Anchors.getSizeClasses('3xl')).toContain(VvConfig.anchors.sizes['3xl'])
    expect(Anchors.getSizeClasses('2xl')).toContain(VvConfig.anchors.sizes['2xl'])
    expect(Anchors.getSizeClasses('xl')).toContain(VvConfig.anchors.sizes['xl'])
    expect(Anchors.getSizeClasses('lg')).toContain(VvConfig.anchors.sizes['lg'])
    expect(Anchors.getSizeClasses('md')).toContain(VvConfig.anchors.sizes['md'])
    expect(Anchors.getSizeClasses('sm')).toContain(VvConfig.anchors.sizes['sm'])
    expect(Anchors.getSizeClasses('xs')).toContain(VvConfig.anchors.sizes['xs'])
    expect(Anchors.getSizeClasses('2xs')).toContain(VvConfig.anchors.sizes['2xs'])
    expect(Anchors.getSizeClasses('3xs')).toContain(VvConfig.anchors.sizes['3xs'])
    expect(Anchors.getSizeClasses('4xs')).toContain(VvConfig.anchors.sizes['4xs'])
    expect(Anchors.getSizeClasses('5xs')).toContain(VvConfig.anchors.sizes['5xs'])

})
