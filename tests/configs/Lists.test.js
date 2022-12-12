// ./tests/configs/Lists.test.js

import { Lists } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Lists component returns a truthy value', async () => {

    expect(Lists).toBeTruthy()

})


test('Lists component returns a truthy value for "align", "decoration", "family", "lineHeight", "listStyleType", "padding", "smoothing", "spacing", "weight", "wordBreak" properties', async () => {

    expect(Lists.align).toBeTruthy()
    expect(Lists.decoration).toBe('')
    expect(Lists.family).toBe('')
    expect(Lists.lineHeight).toBe('')
    expect(Lists.padding).toBeTruthy()
    expect(Lists.smoothing).toBeTruthy()
    expect(Lists.spacing).toBe('')
    expect(Lists.weight).toBe('')
    expect(Lists.wordBreak).toBe('')
    
})


test('Lists component returns a truthy value for the "base()" method', async () => {

    const base = Lists.base()
    
    expect(base).toBeTruthy()

})


test('Lists.classes() method returns expected values', async () => {
    
    expect(Lists.classes('')).toContain(VvConfig.text.sizes['md'])
    expect(Lists.classes('4xl')).toContain(VvConfig.text.sizes['4xl'])
    expect(Lists.classes('3xl')).toContain(VvConfig.text.sizes['3xl'])
    expect(Lists.classes('2xl')).toContain(VvConfig.text.sizes['2xl'])
    expect(Lists.classes('xl')).toContain(VvConfig.text.sizes['xl'])
    expect(Lists.classes('lg')).toContain(VvConfig.text.sizes['lg'])
    expect(Lists.classes('md')).toContain(VvConfig.text.sizes['md'])
    expect(Lists.classes('sm')).toContain(VvConfig.text.sizes['sm'])
    expect(Lists.classes('xs')).toContain(VvConfig.text.sizes['xs'])
    expect(Lists.classes('2xs')).toContain(VvConfig.text.sizes['2xs'])
    expect(Lists.classes('3xs')).toContain(VvConfig.text.sizes['3xs'])
    expect(Lists.classes('4xs')).toContain(VvConfig.text.sizes['4xs'])

})
