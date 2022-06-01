// ./tests/configs/palettes/GroundConsole.test.js

import { GroundConsole } from '../../../src/index'



test('GroundConsole component returns a truthy value', async () => {

    expect(GroundConsole).toBeTruthy()

})



test('GroundConsole component returns an object with the standard five console color names', async () => {

    expect(GroundConsole['default']).toBeTruthy()
    expect(GroundConsole['error']).toBeTruthy()
    expect(GroundConsole['primary']).toBeTruthy()
    expect(GroundConsole['secondary']).toBeTruthy()
    expect(GroundConsole['success']).toBeTruthy()

})
