// ./tests/GroundConsolePalette.test.js

import { GroundConsolePalette } from '../../src/index'



test('GroundConsolePalette component returns a truthy value', async () => {

    expect(GroundConsolePalette).toBeTruthy()

})



test('GroundConsolePalette.console component returns an object with a truthy console property', async () => {

    expect(GroundConsolePalette.console).toBeTruthy()

})



test('GroundConsolePalette.console.colors component returns an object with a truthy colors property', async () => {

    expect(GroundConsolePalette.console.colors).toBeTruthy()

})



test('GroundConsolePalette component returns an object with the standard five console color names', async () => {

    expect(GroundConsolePalette.console.colors['default']).toBeTruthy()
    expect(GroundConsolePalette.console.colors['error']).toBeTruthy()
    expect(GroundConsolePalette.console.colors['primary']).toBeTruthy()
    expect(GroundConsolePalette.console.colors['secondary']).toBeTruthy()
    expect(GroundConsolePalette.console.colors['success']).toBeTruthy()

})
