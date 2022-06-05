// ./tests/configs/Anchors.test.js

import { Anchors } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Anchors component returns a truthy value', async () => {

    expect(Anchors).toBeTruthy()

})


test('Anchors component returns a truthy value for "cursor", "disabled", "display", "focus" and "text" properties', async () => {

    expect(Anchors.cursor).toBeTruthy()
    expect(Anchors.disabled).toBeTruthy()
    expect(Anchors.display).toBe('')
    expect(Anchors.focus).toBe('')
    expect(Anchors.text).toBeTruthy()

})


test('Anchors component returns a truthy value for the "base()" method', async () => {

    const base = Anchors.base()
    
    expect(base).toBeTruthy()

})
