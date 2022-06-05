// ./tests/configs/Text.test.js

import { Text } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Text component returns a truthy value', async () => {

    expect(Text).toBeTruthy()

})


test('Text component returns a truthy value for "align", "decoration", "family", "lineHeight", "smoothing", "spacing", "weight", "wordBreak" properties', async () => {

    expect(Text.align).toBe('')
    expect(Text.decoration).toBe('')
    expect(Text.family).toBe('')
    expect(Text.lineHeight).toBe('')
    expect(Text.smoothing).toBeTruthy()
    expect(Text.spacing).toBe('')
    expect(Text.weight).toBe('')
    expect(Text.wordBreak).toBe('')
    
})


test('Text component returns a truthy value for the "base()" method', async () => {

    const base = Text.base()
    
    expect(base).toBeTruthy()

})


test('Text.classes() method returns expected values', async () => {
    
    expect(Text.classes('')).toContain(VvConfig.text.sizes['md'])
    expect(Text.classes('4xl')).toContain(VvConfig.text.sizes['4xl'])
    expect(Text.classes('3xl')).toContain(VvConfig.text.sizes['3xl'])
    expect(Text.classes('2xl')).toContain(VvConfig.text.sizes['2xl'])
    expect(Text.classes('xl')).toContain(VvConfig.text.sizes['xl'])
    expect(Text.classes('lg')).toContain(VvConfig.text.sizes['lg'])
    expect(Text.classes('md')).toContain(VvConfig.text.sizes['md'])
    expect(Text.classes('sm')).toContain(VvConfig.text.sizes['sm'])
    expect(Text.classes('xs')).toContain(VvConfig.text.sizes['xs'])
    expect(Text.classes('2xs')).toContain(VvConfig.text.sizes['2xs'])
    expect(Text.classes('3xs')).toContain(VvConfig.text.sizes['3xs'])
    expect(Text.classes('4xs')).toContain(VvConfig.text.sizes['4xs'])

})
