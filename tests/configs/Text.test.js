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
