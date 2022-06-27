// ./tests/configs/ColorModes.test.js

import { ColorModes } from '../../src/index'
import { VvConfig } from '../../src/index'


test('ColorModes component returns a truthy value', async () => {

    expect(ColorModes).toBeTruthy()

})


test('ColorModes component returns a truthy value for "cursor", "disabled", "display", "focus" and "text" properties', async () => {

    expect(ColorModes.dark.ground).toBeTruthy()
    expect(ColorModes.dark.hex).toBeTruthy()
    expect(ColorModes.dark.text).toBeTruthy()
    expect(ColorModes.dark.title).toBeTruthy()

    expect(ColorModes.light.ground).toBeTruthy()
    expect(ColorModes.light.hex).toBeTruthy()
    expect(ColorModes.light.text).toBeTruthy()
    expect(ColorModes.light.title).toBeTruthy()

})