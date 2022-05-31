// ./tests/GroundMonochromatic.test.js

import { GroundMonochromatic } from '../../../src/index'



test('GroundMonochromatic component returns a truthy value', async () => {

    expect(GroundMonochromatic).toBeTruthy()

})



test('GroundMonochromatic component returns an object with the standard five monochromatic color names', async () => {

    expect(GroundMonochromatic['default']).toBeTruthy()
    expect(GroundMonochromatic['error']).toBeTruthy()
    expect(GroundMonochromatic['primary']).toBeTruthy()
    expect(GroundMonochromatic['secondary']).toBeTruthy()
    expect(GroundMonochromatic['success']).toBeTruthy()

})
